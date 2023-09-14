import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState } from "./types";
import { IArticle } from "@customTypes/articleTypes";

const initialState: IArticleSliceInitialState = {
  image: "",
  title: "",
  description: "",
  tags: [],
  type: "",
  content: "",
  showPreview: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    clearImage: (state) => {
      state.image = "";
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setShowPreview: (state) => {
      state.showPreview = !state.showPreview;
    },
    clearAllFields: (state) => {
      state.image = "";
      state.title = "";
      state.description = "";
      state.tags = [];
      state.type = "";
      state.content = "";
    },
    setDataField: (state, action: PayloadAction<IArticle>) => {
      const { image, title, description, tags, sport, content } =
        action.payload;
      state.image = image;
      state.title = title;
      state.description = description;
      state.tags = tags;
      state.type = sport;
      state.content = content;
    },
  },
});

export const {
  setImage,
  clearImage,
  setTitle,
  setDescription,
  setTags,
  setType,
  setContent,
  setShowPreview,
  clearAllFields,
  setDataField,
} = articleSlice.actions;

export default articleSlice.reducer;
