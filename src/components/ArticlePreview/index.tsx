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
  const { image, themes, tags, title, content } = article;

  const sanitizedContent = { __html: DOMPurify.sanitize(content) };

  return (
    <ArticlePreviewWrap>
      <ArticlePreviewMainImage src={image.base64String} />
      <ArticleBody>
        <ArticleMainHeader>{title}</ArticleMainHeader>
        <ArticleTags>
          {tags.map((tag) => (
            <ArticleTag tag={tag.title} link="/" key={tag.title} />
          ))}
        </ArticleTags>
        <ArticleSubject>
          <span>
            Subject:{" "}
            {themes.map((theme, i) => {
              if (i === themes.length - 1) {
                return theme.title;
              } else {
                return `${theme.title}, `;
              }
            })}
          </span>
        </ArticleSubject>
        <StyledContentWrapper dangerouslySetInnerHTML={sanitizedContent} />
      </ArticleBody>
    </ArticlePreviewWrap>
  );
};
