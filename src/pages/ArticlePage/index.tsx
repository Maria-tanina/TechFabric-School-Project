import { RightSidebar } from "@components/RightSidebar";
import { MainContent } from "@components/MainContent";
import {
  ArticleSideMenuItem,
  Count,
  LeftSidebar,
  LoaderWrapper,
} from "@pages/ArticlePage/style";
import { AddLikeButton } from "@components/LikeButton";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { StyledSidebarCard } from "@components/SidebarCard";
import { AuthorInfo } from "@pages/ArticlePage/components/AuthorInfo";
import { AuthorArticlesSidebar } from "@components/AuthorArticlesSidebar";
import { Article } from "@components/Article";
import {
  useFilterArticlesByAuthorQuery,
  useGetArticleInfoQuery,
} from "@services/articlesApi";
import { IArticle } from "@customTypes/articleTypes";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { HOME_PATH } from "@constants/paths";
import { useNotification } from "@hooks/useNotification";
import { Spinner } from "@components/Spinner/style";
import { AddFavoriteButton } from "@components/FavoriteButton";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";

export const ArticlePage = () => {
  const { articleId } = useParams<{ articleId?: string }>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const isLogin = useAppSelector(selectIsLogin);

  const { data, isFetching, isError } = useGetArticleInfoQuery({
    articleId: articleId || "",
  });

  const {
    data: articlesOfCurrentAuthor,
    isFetching: isArticlesOfAuthorLoading,
  } = useFilterArticlesByAuthorQuery({
    authorId: data?.author.id || "",
    pageSize: 3,
    pageNumber: 1,
    orderBy: "topRated",
  });

  const isPublished = data?.status === "Published";

  useEffect(() => {
    if (isError) {
      navigate(HOME_PATH);
      showNotification("Something wrong. Article not found!", "error");
    }
  }, [isError]);

  const allArticlesExceptCurrent = useMemo(() => {
    return articlesOfCurrentAuthor?.articles.filter(
      (article) => article.id !== articleId
    );
  }, [articleId, articlesOfCurrentAuthor]);

  return (
    <>
      {isFetching || isArticlesOfAuthorLoading ? (
        <LoaderWrapper style={{ height: "calc(100vh - 264px)" }}>
          <Spinner size={110} />
        </LoaderWrapper>
      ) : (
        <>
          <LeftSidebar>
            {isLogin && isPublished && (
              <>
                <ArticleSideMenuItem>
                  <AddLikeButton
                    articleId={articleId || ""}
                    showText={false}
                    size="42px"
                  />
                  <Count>{data?.likeCount}</Count>
                </ArticleSideMenuItem>
                <ArticleSideMenuItem>
                  <AddFavoriteButton
                    articleId={articleId || ""}
                    size="42px"
                    showText={false}
                  />
                </ArticleSideMenuItem>
              </>
            )}

            {isPublished && (
              <ArticleSideMenuItem>
                <ChatOutlinedIcon />
                <Count>4</Count>
              </ArticleSideMenuItem>
            )}
          </LeftSidebar>

          <MainContent>
            <Article article={data as IArticle} />
          </MainContent>

          <RightSidebar>
            <StyledSidebarCard>
              <AuthorInfo author={data?.author} date={data?.createdAt} />
            </StyledSidebarCard>
            {!!allArticlesExceptCurrent?.length && (
              <StyledSidebarCard>
                <AuthorArticlesSidebar
                  author={data?.author}
                  articles={allArticlesExceptCurrent || []}
                />
              </StyledSidebarCard>
            )}
          </RightSidebar>
        </>
      )}
    </>
  );
};
