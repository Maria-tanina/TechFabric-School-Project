import { TabsMenuItem } from "@pages/Home/copmonents/TabsMenu/types";
import { HOME_PATH } from "@constants/paths";

export const filterTabs: TabsMenuItem[] = [
  {
    value: "Last Articles",
    link: HOME_PATH,
    orderBy: "byCreatedDateDesc",
  },
  {
    value: "Top Rated",
    link: HOME_PATH,
    orderBy: "topRated",
  },
  {
    value: "First Articles",
    link: HOME_PATH,
    orderBy: "byCreatedDateAsc",
  },
  {
    value: "All Posts",
    link: HOME_PATH,
    orderBy: "byCreatedDateDesc",
  },
];
