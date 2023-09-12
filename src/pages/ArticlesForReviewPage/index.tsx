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
import { SmallArticlesList } from "@components/SmallArticlesList";
import { useGetArticlesForReviewQuery } from "@services/articlesApi";
import { ArticlesInfo } from "@components/ArticlesInfo";

const ArticlesForReviewPage = () => {
  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useGetArticlesForReviewQuery();
  return (
    <MyArticlesPageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        {isLoading ? (
          <LinearProgress />
        ) : isError ? (
          <ErrorMessage>
            {getErrorMessage((error as FetchBaseQueryError)?.data) ||
              "Articles not found"}
          </ErrorMessage>
        ) : (
          <Grid container direction="row" alignItems="stretch" spacing={3}>
            <Grid item sm={12}>
              <ArticlesInfo showLikes={false} articles={articles} />
            </Grid>
            <SmallArticlesList articles={articles} />
          </Grid>
        )}
      </MainContent>
    </MyArticlesPageWrapper>
  );
};

export default ArticlesForReviewPage;
