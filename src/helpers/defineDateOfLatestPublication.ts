import { IArticle } from "@customTypes/articleTypes";

export const defineDateOfLatestPublication = (articles: IArticle[]) => {
  return new Date(
    Math.max(
      ...articles.map((article) => new Date(article.createdAt).getTime())
    )
  );
};
