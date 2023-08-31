export interface IArticleProps {
  article: IArticle;
}

export interface IArticle {
  id: number;
  title: string;
  image: string;
  user: {
    firstName: string;
    lastName: string;
  };
  date: string;
  tags: string[];
}
