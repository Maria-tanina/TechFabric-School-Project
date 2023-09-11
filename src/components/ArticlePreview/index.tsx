import {
  ArticleBody,
  ArticleMainHeader,
  ArticleSubject,
  ArticleTags,
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { IImage } from "@features/article/types";
import { FC } from "react";
import {
  ArticlePreviewMainImage,
  ArticlePreviewWrap,
  StyledContentWrapper,
} from "@components/ArticlePreview/style";
import * as DOMPurify from "dompurify";

interface IArticlePreviewProps {
  article: {
    image: IImage;
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
      <ArticlePreviewMainImage src={image.base64String} />
      <ArticleBody>
        <ArticleMainHeader>{title}</ArticleMainHeader>
        <ArticleTags>
          {tags.map((tag) => (
            <ArticleTag tag={tag} link="/" key={tag} />
          ))}
        </ArticleTags>
        <ArticleSubject>
          <span>Subject: {type}</span>
        </ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
    </ArticlePreviewWrap>
  );
};
