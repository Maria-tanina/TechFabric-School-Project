import { IOption } from "@components/TagsSelect/types";

export const selectUniqueItems = (
  newValues: IOption[],
  existingValues: IOption[]
) => {
  return newValues.filter(
    (newTag) => !existingValues.some((tag) => tag.title === newTag.title)
  );
};

export const atLeastOneItemIsMissing = (
  newValues: IOption[],
  existingValues: IOption[]
) => {
  return existingValues.some(
    (tag) => !newValues.some((newTag) => tag.title === newTag.title)
  );
};
