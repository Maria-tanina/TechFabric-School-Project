import Article from "../Article";
import { mockArticles } from "./mockArticles";
import { ArticlesWrapper } from "./style";

export const ArticleList = () => {
  return (
    <ArticlesWrapper>
      {mockArticles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ArticlesWrapper>
  );
};

export default ArticleList;
