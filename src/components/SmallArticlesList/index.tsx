import { FC } from "react";
import { IArticle } from "@customTypes/articleTypes";
import { SmallArticleCard } from "@components/SmallArticleCard";

interface IArticleListProps {
  articles: IArticle[];
}

export const SmallArticlesList: FC<IArticleListProps> = ({ articles }) => {
  return (
    <>
      {articles?.map((article) => (
        <SmallArticleCard article={article} key={article.title} />
      ))}
    </>
  );
};
