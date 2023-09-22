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
import {
  selectFilteredPageNumber,
  selectFilteredPageOrderBy,
  selectFilteredPageSize,
  selectSportType,
} from "@features/sort/sortSelectors";
import {
  setFilteredArticlesPageNumber,
  setFilteredArticlesPageSize,
} from "@features/sort/sortSlice";
import { allTypesOfSport } from "@constants/filtrationStrinds";

const HomePage = () => {
  const pageNumber = useAppSelector(selectPageNumber);

  const pageSize = useAppSelector(selectPageSize);

  const orderBy = useAppSelector(selectOrderBy);

  const sportType = useAppSelector(selectSportType);

  const filteredPageNumber = useAppSelector(selectFilteredPageNumber);

  const filteredPageSize = useAppSelector(selectFilteredPageSize);

  const filteredPageOrderBy = useAppSelector(selectFilteredPageOrderBy);

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

  const pageSettings = useMemo(() => {
    if (sportType !== allTypesOfSport) {
      const articlesTotalCount = filteredArticles?.totalCount || 0;

      const pagesTotalCount = countTotalNumberOfPages(
        articlesTotalCount,
        filteredPageSize
      );

      return {
        pageNumber: filteredPageNumber,
        pageSize: filteredPageSize,
        orderBy: filteredPageOrderBy,
        pagesTotalCount,
      };
    } else {
      const articlesTotalCount = articles?.totalCount || 0;

      const pagesTotalCount = countTotalNumberOfPages(
        articlesTotalCount,
        pageSize
      );

      return {
        pageNumber,
        pageSize,
        orderBy,
        pagesTotalCount,
      };
    }
  }, [
    sportType,
    filteredArticles?.totalCount,
    filteredPageSize,
    filteredPageNumber,
    filteredPageOrderBy,
    articles?.totalCount,
    pageSize,
    pageNumber,
    orderBy,
  ]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    if (sportType !== allTypesOfSport) {
      dispatch(setFilteredArticlesPageNumber(value));
    } else {
      dispatch(setPageNumber(value));
    }
    window.scrollTo(0, 0);
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (sportType !== allTypesOfSport) {
      dispatch(setFilteredArticlesPageSize(+event.target.value));
    } else {
      dispatch(setPageSize(+event.target.value));
    }
    window.scrollTo(0, 0);
  };

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
        {!isFetching &&
          !isError &&
          !isFilteredArticlesFetching &&
          !isFilteringError && (
            <>
              <PaginationRounded
                count={pageSettings.pagesTotalCount}
                page={pageSettings.pageNumber}
                onChange={handlePageChange}
              />
              <PaginationSelect
                value={pageSettings.pageSize}
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
