import { IArticle } from "@customTypes/article";

export const mockArticles: IArticle[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien tempor, mollis est tempus, tincidunt enim.",
    image: "https://www.rankone.com/content/Images/hero-bg.jpg",
    user: {
      firstName: "Harold",
      lastName: "Painless",
    },
    date: "September 14, 2023",
    tags: ["#car", "#blue", "#technique", "#mechanic"],
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien tempor, mollis est tempus, tincidunt enim.",
    image: "https://www.rankone.com/content/Images/hero-bg.jpg",
    user: {
      firstName: "Harold",
      lastName: "Painless",
    },
    date: "October 14, 2023",
    tags: ["#car", "#mechanic"],
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed sapien tempor, mollis est tempus, tincidunt enim.",
    image: "https://www.rankone.com/content/Images/hero-bg.jpg",
    user: {
      firstName: "Harold",
      lastName: "Painless",
    },
    date: "December 7, 2023",
    tags: ["#technique", "#mechanic", "football"],
  },
];
