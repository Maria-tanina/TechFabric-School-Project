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
import { Link } from "react-router-dom";
import { UPDATE_ARTICLE_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectUserId, selectUserIsAdmin } from "@services/authSelectors";
import { RefObject } from "react";
import { IGetCommentsResponse } from "@services/types/commentsApiTypes";
import { getDate } from "@helpers/getDate";
import {
  incCommentPageNumber,
  setComments,
} from "@features/comments/commentsSlice";
import Typography from "@mui/material/Typography";
import { useDeleteCommentMutation } from "@services/commentsApi";
import { useNotification } from "@hooks/useNotification";
import { getErrorTitle } from "@helpers/errorHandlers";
import { selectIsLogin } from "@features/user/usersSelectors";
import { selectComments } from "@features/comments/commentsSelectors";
import InfiniteScroll from "react-infinite-scroll-component";
import { LinearProgress } from "@mui/material";

interface IAdditionalArticleProps extends IArticleProps {
  commentsSectionRef: RefObject<HTMLDivElement>;
  commentsData: IGetCommentsResponse | undefined;
}

export const Article = ({
  article,
  commentsSectionRef,
  commentsData,
}: IAdditionalArticleProps) => {
  const [deleteComment] = useDeleteCommentMutation();

  const comments = useAppSelector(selectComments);

  const sanitizedContent = { __html: DOMPurify.sanitize(article?.content) };

  const currentUserId = useAppSelector(selectUserId);

  const isAdmin = useAppSelector(selectUserIsAdmin);

  const isAuthor =
    !!currentUserId && !!article && currentUserId === article.author.id;

  const isLogin = useAppSelector(selectIsLogin);

  const isPublished = article.status === "Published";

  const dispatch = useAppDispatch();

  const { showNotification } = useNotification();

  const showMore = () => {
    dispatch(incCommentPageNumber(1));
    const newComments = commentsData?.comments || [];
    dispatch(setComments(newComments));
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment({
        commentId,
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
            <OutlinedButton variant="contained">Edit Article</OutlinedButton>
          </Link>
        </EditButtonWrapper>
      )}

      {isPublished && (
        <ArticleCommentWrapper ref={commentsSectionRef}>
          <CountComments>
            Comments: {commentsData?.totalCount || 0}
          </CountComments>

          {isLogin && <CommentForm articleId={article.id} />}
          {commentsData && (
            <InfiniteScroll
              dataLength={comments.length}
              next={showMore}
              hasMore={commentsData.totalCount > comments.length}
              loader={<LinearProgress />}
            >
              {comments.map((comment) => {
                return (
                  <CommentBody key={comment.commentId}>
                    <ProfileInfo
                      userName={`${comment.author.firstName} ${comment.author.lastName}`}
                      subtitle={getDate(comment.createdAt)}
                    />
                    <CommentMessage>{comment.content}</CommentMessage>
                    {currentUserId === comment.author.id || isAdmin ? (
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
