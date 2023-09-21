import { RootState } from "../../store";

export const selectTags = (state: RootState) => state.allTags.tags;
