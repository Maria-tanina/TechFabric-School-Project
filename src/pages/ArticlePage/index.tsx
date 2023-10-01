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
import { useEffect, useRef, useMemo } from "react";
import { HOME_PATH } from "@constants/paths";
import { useNotification } from "@hooks/useNotification";
import { Spinner } from "@components/Spinner/style";
import { AddFavoriteButton } from "@components/FavoriteButton";
import { useGetLikesCountQuery } from "@services/favoritesApi";
import {
  selectFavoritesPostIds,
  selectLikedPostIds,
} from "@services/favoritesSelectors";
import { useAppSelector } from "../../store";
import { selectCommentPageNumber } from "@features/comments/commentsSelectors";
import { CommentButton } from "@components/CommentButton/style";
import { useGetCommentsQuery } from "@services/commentsApi";
import { selectIsLogin } from "@features/user/usersSelectors";

export const ArticlePage = () => {
  const { articleId } = useParams<{ articleId?: string }>();

  const isLogin = useAppSelector(selectIsLogin);

  const navigate = useNavigate();

  const { showNotification } = useNotification();

  const pageNumber = useAppSelector(selectCommentPageNumber);

  const { data, isFetching, isError } = useGetArticleInfoQuery({
    articleId: articleId || "",
  });
  const validId = typeof articleId === "string" ? articleId : "";
  const likedPostsId = useAppSelector(selectLikedPostIds);
  const favoritesPostsId = useAppSelector(selectFavoritesPostIds);
  const isLiked = Array.isArray(likedPostsId) && likedPostsId.includes(validId);
  const isFavorites =
    Array.isArray(favoritesPostsId) && favoritesPostsId?.includes(validId);
  const { data: likeCount } = useGetLikesCountQuery(validId);

  const { data: commentsData, isLoading: isCommentsLoading } =
    useGetCommentsQuery({
      articleId: articleId || "",
      pageNumber,
      pageSize: 5,
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

  const commentsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToComments = () => {
    if (commentsSectionRef.current) {
      commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {isFetching || isArticlesOfAuthorLoading || isCommentsLoading ? (
        <LoaderWrapper style={{ height: "calc(100vh - 264px)" }}>
          <Spinner size={110} />
        </LoaderWrapper>
      ) : (
        <>
          <LeftSidebar>
            {isPublished && (
              <>
                <ArticleSideMenuItem>
                  <AddLikeButton
                    isLiked={isLiked}
                    articleId={articleId || ""}
                    showText={false}
                    size="42px"
                  />
                  <Count>{likeCount}</Count>
                </ArticleSideMenuItem>
                <ArticleSideMenuItem>
                  {isLogin && (
                    <AddFavoriteButton
                      isFavorite={isFavorites}
                      articleId={articleId || ""}
                      size="42px"
                      showText={false}
                    />
                  )}
                </ArticleSideMenuItem>
              </>
            )}

            {isPublished && (
              <ArticleSideMenuItem onClick={scrollToComments}>
                <CommentButton endIcon={<ChatOutlinedIcon />} />
                <Count>{commentsData?.totalCount || 0}</Count>
              </ArticleSideMenuItem>
            )}
          </LeftSidebar>

          <MainContent>
            <Article
              article={data as IArticle}
              commentsSectionRef={commentsSectionRef}
              commentsData={commentsData}
            />
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
