export interface IArticleProps {
  article: IArticle
}

export interface IArticle {
  id: number;
  title: string;
  image: string;
  user: {
    firstname: string;
    lastname: string;
  };
  date: string;
  tags: string[];
}
