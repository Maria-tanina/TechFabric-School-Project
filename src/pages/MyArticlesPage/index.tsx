import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { HomePageWrapper } from "./style";

const MyArticlesPage = () => {
  return (
    <HomePageWrapper>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>
    </HomePageWrapper>
  );
};

export default MyArticlesPage;
