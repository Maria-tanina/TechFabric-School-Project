import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { SmallArticlesList } from "./components/SmallArticlesList";
import { useGetMyArticlesQuery } from "@services/articlesApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LinearProgress } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { ErrorMessage, MyArticlesPageWrapper } from "./style";

const MyArticlesPage = () => {
  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useGetMyArticlesQuery();

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
          <SmallArticlesList articles={articles} />
        )}
      </MainContent>
    </MyArticlesPageWrapper>
  );
};

export default MyArticlesPage;
