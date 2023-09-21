export function removeImgTags(str: string): string {
  return str.replace(/<img[^>]+>/g, "");
}

export const isContentValid = (content: string, min: number, max: number) => {
  return (
    removeImgTags(content).length >= min && removeImgTags(content).length <= max
  );
};
