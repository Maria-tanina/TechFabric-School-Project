import { SportTypes } from "@services/types/articlesApiTypes";

export interface ISortSliceInitialState {
  type: keyof typeof SportTypes;
  pageNumber: number;
  pageSize: number;
  orderBy: "byCreatedDateDesc" | "byCreatedDateAsc" | "topRated";
}
