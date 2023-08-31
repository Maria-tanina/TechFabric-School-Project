import { AuthorLabel } from "@components/AuthorLabel";
import { ArticleDate } from "@pages/ArticlePage/components/AuthorInfo/style";

export const AuthorInfo = () => {
  return (
    <>
      <AuthorLabel firstName="Harold" lastName="Painless" link="/" />
      <ArticleDate>Date: October 17, 2023</ArticleDate>
    </>
  );
};
