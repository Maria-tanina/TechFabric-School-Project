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
      </MainContent>
    </MyArticlesPageWrapper>
  );
};

export default ArticlesForReviewPage;
