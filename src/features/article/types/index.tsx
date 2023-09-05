import { IOption } from "@components/TagsSelect/types";

export interface IImage {
  fileName: string;
  base64String: string;
}

export interface IArticleSliceInitialState {
  image: IImage;
  title: string;
  tags: IOption[];
  themes: IOption[];
  content: string;
}
