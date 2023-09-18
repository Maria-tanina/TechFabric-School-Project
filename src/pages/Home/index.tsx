import { ErrorMessage, HomePageWrapper } from "./style";
import ArticleList from "@components/ArticleList";
import { TopTags } from "./copmonents/TopTags";
import { TopAuthors } from "./copmonents/TopAuthors";
import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import { useGetArticlesQuery } from "@services/articlesApi";
import { LinearProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectOrderBy,
  selectPageNumber,
  selectPageSize,
} from "@features/article/articleSelectors";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent } from "react";
import { setPageNumber } from "@features/article/articleSlice";
import TabsMenu from "@components/TabsMenu";

const HomePage = () => {
  const pageNumber = useAppSelector(selectPageNumber);

  const pageSize = useAppSelector(selectPageSize);

  const orderBy = useAppSelector(selectOrderBy);

  const {
    data: articles,
    isFetching,
    isError,
  } = useGetArticlesQuery({
    pageNumber,
    pageSize,
    orderBy,
  });

  const articlesTotalCount = articles?.totalCount || 0;

  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);

  const dispatch = useAppDispatch();

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
    window.scrollTo(0, 0);
  };

  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TabsMenu />
        {isFetching ? (
          <LinearProgress />
        ) : isError ? (
          <ErrorMessage>Articles not found!</ErrorMessage>
        ) : (
          <ArticleList articles={articles?.articles} />
        )}
        {!isFetching && (
          <PaginationRounded
            count={pagesTotalCount}
            page={pageNumber}
            onChange={handlePageChange}
          />
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
