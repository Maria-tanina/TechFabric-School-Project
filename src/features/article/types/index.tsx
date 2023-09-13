export interface IImage {
  fileName: string;
  base64String: string;
}

export interface IArticleSliceInitialState {
  image: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  content: string;
  showPreview: boolean;
}
