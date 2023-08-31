import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import {
  ArticleSideMenuItem,
  Count,
  LeftSidebar,
} from "@pages/ArticlePage/style";
import { LikeButton } from "@components/LikeButton";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { StyledSidebarCard } from "@components/SidebarCard";
import { AuthorInfo } from "@pages/ArticlePage/components/AuthorInfo";
import { AuthorArticlesSidebar } from "@components/AuthorArticlesSidebar";
import { Article } from "@components/Article";

export const ArticlePage = () => {
  return (
    <>
      <LeftSidebar>
        <ArticleSideMenuItem>
          <LikeButton />
          <Count>2</Count>
        </ArticleSideMenuItem>
        <ArticleSideMenuItem>
          <ChatOutlinedIcon />
          <Count>4</Count>
        </ArticleSideMenuItem>
      </LeftSidebar>

      <MainContent>
        <Article />
      </MainContent>

      <RightSidebar>
        <StyledSidebarCard>
          <AuthorInfo />
        </StyledSidebarCard>
        <StyledSidebarCard>
          <AuthorArticlesSidebar />
        </StyledSidebarCard>
      </RightSidebar>
    </>
  );
};
