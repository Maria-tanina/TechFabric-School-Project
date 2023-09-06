import { ErrorMessage, HomePageWrapper } from "./style";
import TabsMenu from "./copmonents/TabsMenu";
import ArticleList from "@components/ArticleList";
import { TopTags } from "./copmonents/TopTags";
import { TopAuthors } from "./copmonents/TopAuthors";
import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import { useGetArticlesQuery } from "@services/articlesApi";
import { LinearProgress } from "@mui/material";

const HomePage = () => {
  const { data: articles, isLoading, isError } = useGetArticlesQuery();

  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TabsMenu />
        {isLoading ? (
          <LinearProgress />
        ) : isError ? (
          <ErrorMessage>Articles not found!</ErrorMessage>
        ) : (
          <ArticleList articles={articles} />
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
