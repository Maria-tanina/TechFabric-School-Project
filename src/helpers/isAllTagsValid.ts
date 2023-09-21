export const isAllStringValid = (tags: string[], maxLength: number) => {
  return tags.every((tag) => tag.length <= maxLength);
};
