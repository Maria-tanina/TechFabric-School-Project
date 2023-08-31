import { AuthorLabel } from "@components/AuthorLabel";
import { ArticleDate } from "@pages/ArticlePage/components/AuthorInfo/style";

export const AuthorInfo = () => {
  return (
    <>
      <AuthorLabel firstName="Harold" lastName="Painless" link="/" />
      <div>
        <ArticleDate>Date:</ArticleDate>
        <ArticleDate>October 17, 2023</ArticleDate>
      </div>
    </>
  );
};
