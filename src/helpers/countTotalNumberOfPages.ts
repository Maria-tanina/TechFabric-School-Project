export const countTotalNumberOfPages = (
  articlesTotalCount: number,
  pageSize: number
) => {
  return Math.ceil(articlesTotalCount / pageSize);
};
