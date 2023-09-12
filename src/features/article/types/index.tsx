export interface IImage {
  fileName: string;
  base64String: string;
}

export interface IArticleSliceInitialState {
  id: string;
  image: IImage;
  title: string;
  tags: string[];
  type: string;
  content: string;
  showPreview: boolean;
}
