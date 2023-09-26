import {
  ErrorMessage,
  MyArticlesPageWrapper,
} from "@pages/MyArticlesPage/style";
import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { Grid, LinearProgress } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useGetArticlesForReviewQuery } from "@services/articlesApi";
import { ArticlesInfo } from "@components/ArticlesInfo";
import { SmallArticleCard } from "@components/SmallArticleCard";
import { UPDATE_ARTICLE_PATH } from "@constants/paths";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectArticleForReviewOrderBy,
  selectArticleForReviewPageNumber,
  selectArticleForReviewPageSize,
} from "@features/articleForReview/articleForReviewSelectors";
import { setArticleForReviewPageNumber } from "@features/articleForReview/articleForReviewSlice";

const ArticlesForReviewPage = () => {
  const pageNumber = useAppSelector(selectArticleForReviewPageNumber);

  const pageSize = useAppSelector(selectArticleForReviewPageSize);

  const orderBy = useAppSelector(selectArticleForReviewOrderBy);

  const {
    data: articlesData,
    isFetching,
    isError,
    error,
  } = useGetArticlesForReviewQuery({
    pageNumber,
    pageSize,
    orderBy,
  });

  const dispatch = useAppDispatch();

  const articles = articlesData?.articles || [];

  const articlesTotalCount = articlesData?.totalCount || 0;

  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setArticleForReviewPageNumber(value));
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
                showLikes={false}
                articles={articles}
                articlesTotalCount={articlesTotalCount}
              />
            </Grid>
            {articles?.map((article) => (
              <SmallArticleCard
                article={article}
                key={article.title}
                link={`${UPDATE_ARTICLE_PATH}/${article.id}`}
                reviewMode={true}
              />
            ))}
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

export default ArticlesForReviewPage;
