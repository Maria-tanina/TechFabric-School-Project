export interface IPublishArticleRequest {
  title: string;
  sport: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  content: string;
}

export interface ISport {
  name: string;
  description: string;
}
