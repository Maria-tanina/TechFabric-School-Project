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
  },
});

export const { setImage, clearImage, setTitle, setTags, setThemes } =
  articleSlice.actions;

export default articleSlice.reducer;
