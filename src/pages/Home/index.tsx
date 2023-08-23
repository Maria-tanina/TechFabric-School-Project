import { ArticlesWithMenu, HomePageWrapper, RightSidebar } from "./style";
import TabsMenu from "./copmonents/TabsMenu";
import ArticleList from "./copmonents/ArticleList";
import { TopTags } from "./copmonents/TopTags";
import { TopAuthors } from "./copmonents/TopAuthors";
import NavigationMenu from "@components/NavigationMenu";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <NavigationMenu />

      <ArticlesWithMenu>
        <TabsMenu />
        <ArticleList />
      </ArticlesWithMenu>

      <RightSidebar>
        <TopTags />
        <TopAuthors />
      </RightSidebar>
    </HomePageWrapper>
  );
};

export default HomePage;
