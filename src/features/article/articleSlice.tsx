import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState, IImage } from "./types";

const initialState: IArticleSliceInitialState = {
  id:"",
  image: {
    fileName: "",
    base64String: "",
  },
  title: "",
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
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
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
  setType,
  setContent,
  setId,
  setShowPreview,
} = articleSlice.actions;

export default articleSlice.reducer;
