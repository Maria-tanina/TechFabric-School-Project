import { topsApi } from "@services/topsApi";
import { createSelector } from 'reselect';

export const selectTags = createSelector([state => state,(_, params) => params], (state,params) =>{
    return topsApi.endpoints?.getTopTags.select(params)(state)?.data?.map((tag) => tag.tagName) ?? [];
});

export const selectTagsLoading = createSelector([state => state,(_, params) => params], (state,params) =>{
    return topsApi.endpoints?.getTopTags.select(params)(state)?.isLoading;
});

