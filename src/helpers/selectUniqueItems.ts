export const selectUniqueItems = (
  newValues: string[],
  existingValues: string[]
) => {
  return newValues.filter(
    (newTag) => !existingValues.some((tag) => tag === newTag)
  );
};

export const atLeastOneItemIsMissing = (
  newValues: string[],
  existingValues: string[]
) => {
  return existingValues.some(
    (tag) => !newValues.some((newTag) => tag === newTag)
  );
};
