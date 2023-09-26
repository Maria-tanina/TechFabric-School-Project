import { AuthorLabel } from "@components/AuthorLabel";
import { ArticleDate } from "@pages/ArticlePage/components/AuthorInfo/style";
import { getDate } from "@helpers/getDate";

interface IAuthorInfo {
  author:
    | {
        firstName: string;
        lastName: string;
      }
    | undefined;
  date: string | undefined;
}

export const AuthorInfo = ({ author, date }: IAuthorInfo) => {
  const postedDate = getDate(date as string);

  return (
    <>
      {author && (
        <AuthorLabel
          firstName={author?.firstName}
          lastName={author?.lastName}
        />
      )}
      <ArticleDate>{postedDate}</ArticleDate>
    </>
  );
};
