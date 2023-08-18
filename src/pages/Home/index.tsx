import {
  ArticlesWithMenu,
  HomePageWrapper,
} from "./style";
import TabsMenu from "./copmonents/TabsMenu";
import ArticleList from "./copmonents/ArticleList";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ArticlesWithMenu>
        <TabsMenu />
        <ArticleList/>
      </ArticlesWithMenu>
    </HomePageWrapper>
  );
};

export default HomePage;
