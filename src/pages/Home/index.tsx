import { HomePageWrapper } from "./style";
import ArticleList from "@components/ArticleList";
import { TopTags } from "./copmonents/TopTags";
import { TopAuthors } from "./copmonents/TopAuthors";
import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import {
  useFilterArticlesByTypeQuery,
  useGetArticlesQuery,
} from "@services/articlesApi";
import { LinearProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectFilterSportType,
  selectOrderBy,
  selectPageNumber,
  selectPageSize,
} from "@features/article/articleSelectors";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent, useMemo } from "react";
import { setPageNumber, setPageSize } from "@features/article/articleSlice";
import TabsMenu from "@components/TabsMenu";
import { PaginationSelect } from "@components/PaginationSelect";
import { countTotalNumberOfPages } from "@helpers/countTotalNumberOfPages";
import { TableFetchError } from "@components/TableNotification";
import { allTypesOfSport } from "@constants/filtrationStrinds";

const HomePage = () => {
  const pageNumber = useAppSelector(selectPageNumber);

  const pageSize = useAppSelector(selectPageSize);

  const orderBy = useAppSelector(selectOrderBy);

  const sportType = useAppSelector(selectFilterSportType);

  const dispatch = useAppDispatch();

  const {
    data: articles,
    isFetching,
    isError,
  } = useGetArticlesQuery(
    {
      pageNumber,
      pageSize,
      orderBy,
    },
    {
      skip: sportType !== allTypesOfSport,
    }
  );

  const {
    data: filteredArticles,
    isFetching: isFilteredArticlesFetching,
    isError: isFilteringError,
  } = useFilterArticlesByTypeQuery(
    {
      sportType,
      pageNumber,
      pageSize,
      orderBy,
    },
    {
      skip: sportType === allTypesOfSport,
    }
  );

  const articlesToShow = useMemo(() => {
    if (sportType !== allTypesOfSport) {
      return filteredArticles?.articles;
    } else {
      return articles?.articles;
    }
  }, [sportType, articles, filteredArticles]);

  const pagesTotalCount = useMemo(() => {
    if (sportType !== allTypesOfSport) {
      const articlesTotalCount = filteredArticles?.totalCount || 0;

      return countTotalNumberOfPages(articlesTotalCount, pageSize);
    } else {
      const articlesTotalCount = articles?.totalCount || 0;

      return countTotalNumberOfPages(articlesTotalCount, pageSize);
    }
  }, [sportType, filteredArticles, articles, pageSize]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
    window.scrollTo(0, 0);
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setPageSize(+event.target.value));
    window.scrollTo(0, 0);
  };

  const showPagination = useMemo(() => {
    return (
      !isFetching &&
      !isError &&
      !isFilteredArticlesFetching &&
      !isFilteringError
    );
  }, [isError, isFetching, isFilteredArticlesFetching, isFilteringError]);

  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TabsMenu />
        {isFetching || isFilteredArticlesFetching ? (
          <LinearProgress />
        ) : isError ? (
          <TableFetchError message="Articles not found!" />
        ) : (
          <ArticleList articles={articlesToShow} />
        )}
        {showPagination && (
          <>
            <PaginationRounded
              count={pagesTotalCount}
              page={pageNumber}
              onChange={handlePageChange}
            />
            <PaginationSelect
              value={pageSize}
              onChange={handlePageSizeChange}
              options={[5, 10, 25, 50]}
            />
          </>
        )}
      </MainContent>

      <RightSidebar>
        <TopTags />
        <TopAuthors />
      </RightSidebar>
    </HomePageWrapper>
  );
};

export default HomePage;
