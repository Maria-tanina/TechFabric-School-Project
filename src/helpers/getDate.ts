export const getDate = (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
