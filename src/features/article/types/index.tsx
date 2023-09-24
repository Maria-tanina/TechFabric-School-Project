import { TSportOptions } from "@services/types/articlesApiTypes";

export type TOrderBy = "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";

export interface IArticleSliceInitialState {
  image: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  content: string;
  showPreview: boolean;
  pageNumber: number;
  pageSize: number;
  orderBy: TOrderBy;
  filterSportType: TSportOptions;
}
