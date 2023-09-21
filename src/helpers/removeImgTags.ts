export const removeImgTags = (str: string): string => {
  return str.replace(/<img[^>]+>/g, "");
};
