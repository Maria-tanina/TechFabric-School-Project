import {
  ArticleBody,
  ArticleCommentWrapper,
  ArticleMainHeader,
  ArticleMainImage,
  ArticleSubject,
  ArticleTags,
  ArticleWrap,
  CommentBody,
  CommentMessage,
  CountComments,
  EditButtonWrapper,
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { CommentForm } from "@components/CommentForm";
import ProfileInfo from "@components/ProfileInfo";
import { StyledContentWrapper } from "@components/ArticlePreview/style";
import DOMPurify from "dompurify";
import { IArticleProps } from "@customTypes/articleTypes";
import { OutlinedButton } from "@components/OutlinedButton";
import { Link, useParams } from "react-router-dom";
import { SIGNUP_PATH, UPDATE_ARTICLE_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectUserId, selectUserIsAdmin } from "@services/authSelectors";
import { RefObject, useEffect } from "react";
import { getDate } from "@helpers/getDate";
import {
  incCommentPageNumber,
  setCommentPageNumber,
} from "@features/comments/commentsSlice";
import Typography from "@mui/material/Typography";
import { useDeleteCommentMutation } from "@services/commentsApi";
import { useNotification } from "@hooks/useNotification";
import { getErrorTitle } from "@helpers/errorHandlers";
import { selectIsLogin } from "@features/user/usersSelectors";
import InfiniteScroll from "react-infinite-scroll-component";
import { LinearProgress } from "@mui/material";
import { IGetCommentsResponse } from "@services/types/commentsApiTypes";
import { selectCommentPageNumber } from "@features/comments/commentsSelectors";
import { setShowPreview } from "@features/article/articleSlice";

interface IAdditionalArticleProps extends IArticleProps {
  commentsSectionRef: RefObject<HTMLDivElement>;
  commentsData: IGetCommentsResponse | undefined;
}

export const Article = ({
  article,
  commentsSectionRef,
  commentsData,
}: IAdditionalArticleProps) => {
  const { articleId = "" } = useParams<{ articleId?: string }>();

  const [deleteComment] = useDeleteCommentMutation();

  const sanitizedContent = { __html: DOMPurify.sanitize(article?.content) };

  const currentUserId = useAppSelector(selectUserId);

  const isAdmin = useAppSelector(selectUserIsAdmin);

  const isAuthor =
    !!currentUserId && !!article && currentUserId === article.author.id;

  const isLogin = useAppSelector(selectIsLogin);

  const isPublished = article.status === "Published";

  const pageNumber = useAppSelector(selectCommentPageNumber);

  const dispatch = useAppDispatch();

  const { showNotification } = useNotification();

  const onEditClick = () => {
    dispatch(setShowPreview(false));
  };

  const showMore = () => {
    dispatch(incCommentPageNumber(1));
  };

  useEffect(() => {
    dispatch(setCommentPageNumber(1));
  }, [articleId]);

  useEffect(() => {
    dispatch(setCommentPageNumber(1));
  }, []);

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment({
        commentId,
        articleId,
        pageSize: 5,
        pageNumber,
      }).unwrap();
    } catch (error) {
      showNotification(
        getErrorTitle(error) || "Some error occurred...",
        "error"
      );
    }
  };

  return (
    <ArticleWrap>
      <ArticleMainImage src={article?.image} />
      <ArticleBody>
        <ArticleMainHeader>{article?.title}</ArticleMainHeader>
        <ArticleTags>
          {article?.tags.map((tag) => <ArticleTag key={tag} tag={tag} />)}
        </ArticleTags>
        <ArticleSubject>
          <span>Type: {article?.sport}</span>
        </ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
      {isAuthor && !isPublished && (
        <EditButtonWrapper>
          <Link to={`${UPDATE_ARTICLE_PATH}/${article.id}`}>
            <OutlinedButton variant="contained" onClick={onEditClick}>
              Edit Article
            </OutlinedButton>
          </Link>
        </EditButtonWrapper>
      )}

      {isPublished && (
        <ArticleCommentWrapper ref={commentsSectionRef}>
          <CountComments>
            Comments: {commentsData?.totalCount || 0}
          </CountComments>
          {!isLogin && (
            <Typography
              sx={{
                color: "#676767",
                marginBottom: "20px",
                marginTop: "-10px",
                fontSize: "16px",
              }}
            >
              You will be able to leave a comment on the publication after
              <Link to={SIGNUP_PATH} style={{ color: "#FEDE24" }}>
                {" "}
                registration.
              </Link>
            </Typography>
          )}

          {isLogin && <CommentForm articleId={article.id} />}
          {commentsData && (
            <InfiniteScroll
              dataLength={commentsData.comments.length}
              next={showMore}
              hasMore={commentsData.totalCount > commentsData.comments.length}
              loader={<LinearProgress />}
            >
              {commentsData?.comments.map((comment) => {
                return (
                  <CommentBody key={comment.commentId}>
                    <ProfileInfo
                      userName={`${comment.author.firstName} ${comment.author.lastName}`}
                      subtitle={getDate(comment.createdAt)}
                    />
                    <CommentMessage>{comment.content}</CommentMessage>
                    {(currentUserId === comment.author.id || isAdmin) &&
                    isLogin ? (
                      <Typography
                        sx={{ display: "block", cursor: "pointer" }}
                        component="span"
                        variant="body2"
                        color="#676767"
                        textAlign="right"
                        onClick={() => handleDeleteComment(comment.commentId)}
                      >
                        Delete
                      </Typography>
                    ) : null}
                  </CommentBody>
                );
              })}
            </InfiniteScroll>
          )}
        </ArticleCommentWrapper>
      )}
    </ArticleWrap>
  );
};
