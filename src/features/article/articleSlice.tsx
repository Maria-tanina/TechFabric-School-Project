import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState, IImage } from "./types";
import { IOption } from "@components/TagsSelect/types";

const initialState: IArticleSliceInitialState = {
  image: {
    fileName: "",
    base64String: "",
  },
  title: "",
  tags: [],
  themes: [],
  content: "",
  showPreview: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<IImage>) => {
      state.image = action.payload;
    },
    clearImage: (state) => {
      state.image = {
        fileName: "",
        base64String: "",
      };
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
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setShowPreview: (state) => {
      state.showPreview = !state.showPreview;
    },
  },
});

export const {
  setImage,
  clearImage,
  setTitle,
  setTags,
  setThemes,
  setContent,
  setShowPreview,
} = articleSlice.actions;

export default articleSlice.reducer;
