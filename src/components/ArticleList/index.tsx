import ArticleCard from "@components/ArticleCard";
import { ArticlesWrapper } from "./style";
import { IArticle } from "@customTypes/article";
import { FC } from "react";

interface IArticleListProps {
  articles: IArticle[];
}

export const ArticleList: FC<IArticleListProps> = ({ articles }) => {
  return (
    <ArticlesWrapper>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ArticlesWrapper>
  );
};

export default ArticleList;
