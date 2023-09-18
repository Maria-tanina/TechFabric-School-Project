import { TabsMenuItem } from "./types";

export const filterTabs: TabsMenuItem[] = [
  {
    value: "Last Articles",
    orderBy: "byCreatedDateDesc",
  },
  {
    value: "First Articles",
    orderBy: "byCreatedDateAsc",
  },
  {
    value: "Top Rated",
    orderBy: "topRated",
  },
];
