import {
  ArticleBody,
  ArticleMainHeader,
  ArticleSubject,
  ArticleTags,
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { FC } from "react";
import {
  ArticlePreviewMainImage,
  ArticlePreviewWrap,
  StyledContentWrapper,
} from "@components/ArticlePreview/style";
import * as DOMPurify from "dompurify";

interface IArticlePreviewProps {
  article: {
    image: string;
    title: string;
    tags: string[];
    type: string;
    content: string;
  };
}

export const ArticlePreview: FC<IArticlePreviewProps> = ({ article }) => {
  const { image, type, tags, title, content } = article;

  const sanitizedContent = { __html: DOMPurify.sanitize(content) };

  return (
    <ArticlePreviewWrap>
      <ArticlePreviewMainImage src={image} />
      <ArticleBody>
        <ArticleMainHeader>{title}</ArticleMainHeader>
        <ArticleTags>
          {tags.map((tag) => (
            <ArticleTag tag={tag} key={tag} />
          ))}
        </ArticleTags>
        <ArticleSubject>{type && <span>Type: {type}</span>}</ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
    </ArticlePreviewWrap>
  );
};
