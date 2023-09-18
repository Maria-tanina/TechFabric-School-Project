import { TOrderByTypes } from "@services/types/articlesApiTypes";

export interface TabsMenuItem {
  value: string;
  link: string;
  orderBy: TOrderByTypes;
}
