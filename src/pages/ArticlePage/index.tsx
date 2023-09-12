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
import {useAppSelector} from "../../store";
import { selectArticleId } from "@features/article/articleSelectors";
import {LSService} from "@services/localStorage";
import {useGetArticleInfoQuery} from "@services/articlesApi";
import {IArticle} from "@customTypes/articleTypes";

export const ArticlePage = () => {
    const articleId = useAppSelector(selectArticleId);
    const {get} = LSService();
    const token = get("accessToken") as string;
    const {data} = useGetArticleInfoQuery(
        {
            articleId,
            token
        });

    return (
    <>
      <LeftSidebar>
        <ArticleSideMenuItem>
          <LikeButton />
          <Count>{data?.likeCount}</Count>
        </ArticleSideMenuItem>
        <ArticleSideMenuItem>
          <ChatOutlinedIcon />
          <Count>4</Count>
        </ArticleSideMenuItem>
      </LeftSidebar>

      <MainContent>
          <Article article={data as IArticle} />
      </MainContent>

      <RightSidebar>
        <StyledSidebarCard>
          <AuthorInfo author={data?.author} date={data?.createdAt}/>
        </StyledSidebarCard>
        <StyledSidebarCard>
          <AuthorArticlesSidebar />
        </StyledSidebarCard>
      </RightSidebar>
    </>
  );
};
