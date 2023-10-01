import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticleSliceInitialState } from "./types";
import { IArticle } from "@customTypes/articleTypes";
import { TOrderByTypes, TSportOptions } from "@services/types/articlesApiTypes";

const initialState: IArticleSliceInitialState = {
  image: "",
  title: "",
  description: "",
  tags: [],
  type: "",
  content: "",
  showPreview: false,
  pageNumber: 1,
  pageSize: 5,
  orderBy: "byCreatedDateDesc",
  filterSportType: "",
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
    toggleShowPreview: (state) => {
      state.showPreview = !state.showPreview;
    },
    setShowPreview: (state, action: PayloadAction<boolean>) => {
      state.showPreview = action.payload;
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
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.pageNumber = 1;
    },
    setOrderBy: (state, action: PayloadAction<TOrderByTypes>) => {
      state.orderBy = action.payload;
      state.pageNumber = 1;
    },
    setFilterSportType: (state, action: PayloadAction<TSportOptions>) => {
      state.filterSportType = action.payload;
      state.pageNumber = 1;
    },
  },
});

export const {
  setImage,
  clearImage,
  setTitle,
  setDescription,
  setShowPreview,
  setTags,
  setType,
  setContent,
  clearAllFields,
  setDataField,
  toggleShowPreview,
  setPageNumber,
  setPageSize,
  setOrderBy,
  setFilterSportType,
} = articleSlice.actions;

export default articleSlice.reducer;
