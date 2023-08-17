import Article from "./copmonents/Article";
import {
  ArticlesWithMenu,
  ArticlesWrapper,
  HomePageWrapper,
} from "@pages/Home/style";
import TabsMenu from "@pages/Home/copmonents/TabsMenu";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ArticlesWithMenu>
        <TabsMenu />
        <ArticlesWrapper>
          <Article />
          <Article />
          <Article />
        </ArticlesWrapper>
      </ArticlesWithMenu>
    </HomePageWrapper>
  );
};

export default HomePage;
