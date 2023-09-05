export interface IArticleProps {
  article: IArticle;
}

export interface IArticle {
  title: string;
  description: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  status: string;
  updatedAt: string;
  createdAt: string;
}
