import { FC } from "react";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import {
  HeaderSidebarArticle,
  Line,
  SidebarArticle,
  TagsWrapper,
} from "@components/AuthorArticlesSidebar/style";
import { ArticleTag } from "@components/ArticleTag";
import { IArticle } from "@customTypes/articleTypes";
import { ARTICLE_PATH } from "@constants/paths";
import { Link } from "react-router-dom";

interface IAuthorArticlesSidebarProps {
  author:
    | {
        id: string;
        firstName: string;
        lastName: string;
      }
    | undefined;
  articles: IArticle[];
}

export const AuthorArticlesSidebar: FC<IAuthorArticlesSidebarProps> = ({
  author,
  articles = [],
}) => {
  if (!articles.length) {
    return null;
  }

  return (
    <>
      <StyledSidebarHeader>
        More from{" "}
        <span>
          {author?.firstName} {author?.lastName}
        </span>
      </StyledSidebarHeader>
      {articles.map((article) => {
        return (
          <SidebarArticle key={article.id}>
            <HeaderSidebarArticle>
              <Link to={`${ARTICLE_PATH}/${article.id}`}>{article.title}</Link>
            </HeaderSidebarArticle>
            <TagsWrapper>
              {article.tags.map((tag) => (
                <ArticleTag key={tag} tag={tag} />
              ))}
            </TagsWrapper>
            <Line />
          </SidebarArticle>
        );
      })}
    </>
  );
};
