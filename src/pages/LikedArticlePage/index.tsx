import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { MainContent } from "@components/MainContent";
import ArticleList from "@components/ArticleList";
import { MainHeader } from "@components/MainHeader";
import { mockArticles } from "@pages/LikedArticlePage/mockArticles";

export const LikedArticlePage = () => {
  return (
    <>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>
      <MainContent>
        <MainHeader>Favorite Articles</MainHeader>
        <ArticleList articles={mockArticles} />
      </MainContent>
    </>
  );
};
