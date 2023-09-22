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
}

export interface IFilterArticlesByTypeParams extends IArticleParams {
  sportType: keyof typeof SportTypes;
}
