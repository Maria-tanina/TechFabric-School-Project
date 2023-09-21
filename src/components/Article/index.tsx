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
import { useAppSelector } from "../../store";
import { selectUserId } from "@services/authSelectors";

export const Article = ({ article }: IArticleProps) => {
  const sanitizedContent = { __html: DOMPurify.sanitize(article?.content) };
  const author = useAppSelector(selectUserId);
  const isAuthor = !!author && !!article && author === article.author.id;

  const isPublished = article.status === "Published";

  return (
    <ArticleWrap>
      <ArticleMainImage src={article?.image} />
      <ArticleBody>
        <ArticleMainHeader>{article?.title}</ArticleMainHeader>
        <ArticleTags>
          {article?.tags.map((tag) => (
            <ArticleTag key={tag} link="" tag={tag} />
          ))}
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
      <ArticleCommentWrapper>
        <CountComments>Comments: 4</CountComments>
        <CommentForm />
        <CommentBody>
          <ProfileInfo userName="Harold Painless" subtitle="October 17, 2023" />
          <CommentMessage>
            Ut eu ullamcorper risus. Morbi venenatis, ligula vulputate volutpat
            hendrerit, ipsum tortor vestibulum ex, sed euismod mauris augue
            posuere eros. Duis egestas, est in consequat ultricies, lacus dui
            condimentum neque, eu cursus urna mauris nec arcu. Fusce fringilla
            egestas dolor, et molestie nisi congue convallis.
          </CommentMessage>
        </CommentBody>
      </ArticleCommentWrapper>
    </ArticleWrap>
  );
};
