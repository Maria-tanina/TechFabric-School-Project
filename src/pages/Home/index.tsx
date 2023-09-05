import { HomePageWrapper } from "./style";
import TabsMenu from "./copmonents/TabsMenu";
import ArticleList from "@components/ArticleList";
import { TopTags } from "./copmonents/TopTags";
import { TopAuthors } from "./copmonents/TopAuthors";
import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import { mockArticles } from "@components/ArticleList/mockArticles";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>

      <MainContent>
        <TabsMenu />
        <ArticleList articles={mockArticles} />
      </MainContent>

      <RightSidebar>
        <TopTags />
        <TopAuthors />
      </RightSidebar>
    </HomePageWrapper>
  );
};

export default HomePage;
