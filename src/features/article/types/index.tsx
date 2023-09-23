import { TSportOptions } from "@services/types/articlesApiTypes";

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
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
  filterSportType: TSportOptions;
}
