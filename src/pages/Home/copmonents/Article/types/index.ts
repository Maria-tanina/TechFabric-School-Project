export interface IArticleProps {
  article: IArticle
}

export interface IArticle {
  id: number;
  title: string;
  image: string;
  user: {
    name: string;
  };
  date: string;
  tags: string[];
}
