import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { useGetMyArticlesQuery } from "@services/articlesApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Grid, LinearProgress } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { ErrorMessage, MyArticlesPageWrapper } from "./style";
import { ArticlesInfo } from "@components/ArticlesInfo";
import { WriteMoreCard } from "./components/WriteMoreCard";
import { SmallArticleCard } from "@components/SmallArticleCard";
import { ARTICLE_PATH } from "@constants/paths";
import { PaginationRounded } from "@components/PaginationRounded";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectMyArticleOrderBy,
  selectMyArticlePageNumber,
  selectMyArticlePageSize,
} from "@features/myArticle/myArticleSelectors";
import { ChangeEvent } from "react";
import { setMyArticlePageNumber } from "@features/myArticle/myArticleSlice";

const MyArticlesPage = () => {
  const pageNumber = useAppSelector(selectMyArticlePageNumber);

  const pageSize = useAppSelector(selectMyArticlePageSize);

  const orderBy = useAppSelector(selectMyArticleOrderBy);

  const {
    data: articlesData,
    isFetching,
    isError,
    error,
  } = useGetMyArticlesQuery({
    pageNumber,
    pageSize,
    orderBy,
  });

  const dispatch = useAppDispatch();

  const articles = articlesData?.articles || [];

  const articlesTotalCount = articlesData?.totalCount || 0;

  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setMyArticlePageNumber(value));
    window.scrollTo(0, 0);
  };

  return (
    <MyArticlesPageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        {isFetching ? (
          <LinearProgress />
        ) : isError ? (
          <ErrorMessage>
            {getErrorMessage((error as FetchBaseQueryError)?.data) ||
              "Articles not found"}
          </ErrorMessage>
        ) : (
          <Grid container direction="row" alignItems="stretch" spacing={3}>
            <Grid item sm={12}>
              <ArticlesInfo
                showLikes={true}
                articles={articles}
                articlesTotalCount={articlesTotalCount}
              />
            </Grid>
            {articles.map((article) => (
              <SmallArticleCard
                article={article}
                key={article.title}
                link={`${ARTICLE_PATH}/${article.id}`}
                reviewMode={false}
              />
            ))}
            <WriteMoreCard />
          </Grid>
        )}
        {!isFetching && !isError && !!articlesTotalCount && (
          <>
            <PaginationRounded
              count={pagesTotalCount}
              page={pageNumber}
              onChange={handlePageChange}
            />
          </>
        )}
      </MainContent>
    </MyArticlesPageWrapper>
  );
};

export default MyArticlesPage;
