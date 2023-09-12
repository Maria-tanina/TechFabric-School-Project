export interface IArticle {
  id: string;
  title: string;
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
}
