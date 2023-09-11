import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState, IImage } from "./types";

const initialState: IArticleSliceInitialState = {
  image: {
    fileName: "",
    base64String: "",
  },
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
      state.image = {
        fileName: "",
        base64String: "",
      };
      state.title = "";
      state.description = "";
      state.tags = [];
      state.type = "";
      state.content = "";
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
} = articleSlice.actions;

export default articleSlice.reducer;
