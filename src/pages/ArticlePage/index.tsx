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
import { LSService } from "@services/localStorage";
import { useGetArticleInfoQuery } from "@services/articlesApi";
import { IArticle } from "@customTypes/articleTypes";
import { useNavigate, useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { HOME_PATH } from "@constants/paths";
import { useNotification } from "@hooks/useNotification";

export const ArticlePage = () => {
  const { articleId } = useParams<{ articleId?: string }>();
  const { get } = LSService();
  const token = get("accessToken") as string;
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { data, isLoading, isError } = useGetArticleInfoQuery({
    articleId: articleId || "",
    token,
  });

  useEffect(() => {
    if (isError) {
      navigate(HOME_PATH);
      showNotification("Something wrong. Article not found!", "error");
    }
  }, [isError]);

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
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Article article={data as IArticle} />
        )}
      </MainContent>

      <RightSidebar>
        <StyledSidebarCard>
          <AuthorInfo author={data?.author} date={data?.createdAt} />
        </StyledSidebarCard>
        <StyledSidebarCard>
          <AuthorArticlesSidebar />
        </StyledSidebarCard>
      </RightSidebar>
    </>
  );
};
