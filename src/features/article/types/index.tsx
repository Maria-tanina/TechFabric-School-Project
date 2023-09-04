import { IOption } from "@components/TagsSelect/types";

export interface IArticleSliceInitialState {
  image: { fileName: string; base64String: string };
  title: string;
  tags: IOption[];
  themes: IOption[];
}
