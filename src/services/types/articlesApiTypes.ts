import { IArticle } from "@customTypes/articleTypes";

export interface IPublishArticleRequest {
  title: string;
  sport: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  content: string;
}

export interface ISport {
  name: string;
  description: string;
}

export interface IGetArticlesResponse {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  articles: IArticle[];
}

export type TOrderByTypes =
  | "byCreatedDateDesc"
  | "byCreatedDateAsc"
  | "topRated";

export interface IArticleParams {
  pageNumber: number;
  pageSize: number;
  orderBy: TOrderByTypes;
}
export enum SportTypes {
  Basketball,
  Football,
  Tennis,
  Baseball,
  Soccer,
  Golf,
  Other,
  All,
}

export type TSportOptions = keyof typeof SportTypes | "";

export interface IFilterArticlesByTypeParams extends IArticleParams {
  sportType: TSportOptions;
}
export interface ISearchByString extends IArticleParams {
  substring: string;
}

export interface ISearchByAuthor extends IArticleParams {
  authorName: string;
}

export interface IFilterArticlesByAuthorParams extends IArticleParams {
  authorId: string;
}

export interface IDeleteArticleParams {
  articleId: string;
}
