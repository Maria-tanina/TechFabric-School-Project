import {
  ArticleBody,
  ArticleMainHeader,
  ArticleSubject,
  ArticleTags,
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { IImage } from "@features/article/types";
import { FC } from "react";
import { IOption } from "@components/TagsSelect/types";
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
    tags: IOption[];
    themes: IOption[];
    content: string;
  };
}

export const ArticlePreview: FC<IArticlePreviewProps> = ({ article }) => {
  const sanitizedContent = { __html: DOMPurify.sanitize(article.content) };
  return (
    <ArticlePreviewWrap>
      <ArticlePreviewMainImage src={article.image.base64String} />
      <ArticleBody>
        <ArticleMainHeader>{article.title}</ArticleMainHeader>
        <ArticleTags>
          {article.tags.map((tag) => (
            <ArticleTag tag={tag.title} link="/" key={tag.title} />
          ))}
        </ArticleTags>
        <ArticleSubject>
          <span>Subject: {article.themes.map((theme) => theme.title)}</span>
        </ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
    </ArticlePreviewWrap>
  );
};
