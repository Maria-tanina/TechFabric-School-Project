import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState } from "./types";
import { IOption } from "@components/TagsSelect/types";

const initialState: IArticleSliceInitialState = {
  image: {
    fileName: "",
    base64String: "",
  },
  title: "",
  tags: [],
  themes: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setImage: (
      state,
      action: PayloadAction<{ fileName: string; base64String: string }>
    ) => {
      state.image = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setTags: (state, action: PayloadAction<IOption[]>) => {
      state.tags = action.payload;
    },
    setThemes: (state, action: PayloadAction<IOption[]>) => {
      state.themes = action.payload;
    },
  },
});

export const { setImage, setTitle, setTags, setThemes } = articleSlice.actions;

export default articleSlice.reducer;
