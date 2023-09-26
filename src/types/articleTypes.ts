import { MutableRefObject } from "react";

export interface IArticle {
  id: string;
  title: string;
  sport: string;
  content: string;
  description: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  image: string;
  tags: string[];
  likeCount: number;
  status: string;
  updatedAt: string;
  createdAt: string;
}
export interface IArticleProps {
  article: IArticle;
  commentsSectionRef?: MutableRefObject<HTMLElement | null>;
}

export interface IUpdateArticleProps {
  tags: string[];
  author: string;
  content: string;
  image: string;
  title: string;
  sport: string;
  description: string;
}
