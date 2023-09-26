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
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectFilterSportType,
  selectOrderBy,
  selectPageNumber,
  selectPageSize,
} from "@features/article/articleSelectors";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent, useMemo } from "react";
import {
  setFilterSportType,
  setOrderBy,
  setPageNumber,
  setPageSize,
} from "@features/article/articleSlice";
import TabsMenu from "@components/TabsMenu";
import { PaginationSelect } from "@components/PaginationSelect";
import { countTotalNumberOfPages } from "@helpers/countTotalNumberOfPages";
import { TableFetchError } from "@components/TableNotification";
import { SkeletonCard } from "@components/SkeletonCard";
import { allTypesOfSport } from "@constants/filtrationStrings";
import { SelectChangeEvent } from "@mui/material";
import { TOrderByTypes, TSportOptions } from "@services/types/articlesApiTypes";

const HomePage = () => {
  const pageNumber = useAppSelector(selectPageNumber);

  const pageSize = useAppSelector(selectPageSize);

  const orderBy = useAppSelector(selectOrderBy);

  const sportType = useAppSelector(selectFilterSportType);

  const dispatch = useAppDispatch();

  const filterIsSelected = useMemo(() => {
    return sportType !== allTypesOfSport && sportType !== "";
  }, [sportType]);

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
      skip: filterIsSelected,
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
      skip: !filterIsSelected,
    }
  );

  const articlesToShow = useMemo(() => {
    if (filterIsSelected) {
      return filteredArticles?.articles;
    } else {
      return articles?.articles;
    }
  }, [filterIsSelected, filteredArticles?.articles, articles?.articles]);

  const pagesTotalCount = useMemo(() => {
    if (filterIsSelected) {
      const articlesTotalCount = filteredArticles?.totalCount || 0;

      return countTotalNumberOfPages(articlesTotalCount, pageSize);
    } else {
      const articlesTotalCount = articles?.totalCount || 0;

      return countTotalNumberOfPages(articlesTotalCount, pageSize);
    }
  }, [sportType, filteredArticles, articles, pageSize, filterIsSelected]);

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
      !isFilteringError &&
      articlesToShow?.length !== 0
    );
  }, [
    articlesToShow?.length,
    isError,
    isFetching,
    isFilteredArticlesFetching,
    isFilteringError,
  ]);

  const handleSportTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setFilterSportType(e.target.value as TSportOptions));
  };

  const handleOrderChange = (filter: TOrderByTypes) =>
    dispatch(setOrderBy(filter));

  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TabsMenu
          orderBy={orderBy}
          handleOrderBy={handleOrderChange}
          handleTypeChange={handleSportTypeChange}
          sportType={sportType}
        />
        {isFetching || isFilteredArticlesFetching ? (
          <SkeletonCard />
        ) : !articlesToShow?.length ? (
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
