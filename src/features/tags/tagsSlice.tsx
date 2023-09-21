import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITagData } from "@services/topsApi";

interface ITagsSliceState {
  tags: ITagData[];
}

const initialState: ITagsSliceState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setAllTags: (state, action: PayloadAction<ITagData[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setAllTags } = tagsSlice.actions;

export default tagsSlice.reducer;
