import { ArticleCard } from "@components/ArticleCard";
import { ArticlesWrapper } from "./style";
import { IArticle } from "@customTypes/articleTypes";

interface ArticleListProps {
  articles: IArticle[] | undefined;
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <ArticlesWrapper>
      {articles?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ArticlesWrapper>
  );
};

export default ArticleList;
