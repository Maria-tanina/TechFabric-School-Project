import { removeImgTags } from "@helpers/removeImgTags";

export const isContentValid = (content: string, min: number, max: number) => {
  return (
    removeImgTags(content).length >= min && removeImgTags(content).length <= max
  );
};
