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
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { CommentForm } from "@components/CommentForm";
import ProfileInfo from "@components/ProfileInfo";
import { StyledContentWrapper } from "@components/ArticlePreview/style";
import DOMPurify from "dompurify";
import { IArticleProps } from "@customTypes/articleTypes";

export const Article = ({ article }: IArticleProps) => {
  const sanitizedContent = { __html: DOMPurify.sanitize(article?.content) };

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
          <span>Subject: Sport</span>
        </ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
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
