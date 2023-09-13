import Editor from "@pages/CreatePostPage/components/Editor";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteArticleMutation,
  useGetArticleInfoQuery,
  useUpdateArticleMutation,
} from "@services/articlesApi";
import { useNotification } from "@hooks/useNotification";
import { ARTICLE_PATH, HOME_PATH } from "@constants/paths";
import {
  EditorWrapper,
  LoaderWrapper,
  UpdatePostWrapper,
} from "@pages/UpdateArticlePage/style";
import { AuthorRules } from "@components/AuthorRules";
import { FullHeightSpinner } from "@components/Spinner";
import { IUpdateArticleProps } from "@customTypes/articleTypes";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const UpdateArticlePage = () => {
  const { articleId = "" } = useParams<{ articleId?: string | undefined }>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [updateArticle, { isError }] = useUpdateArticleMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const { data, isLoading } = useGetArticleInfoQuery({
    articleId: articleId || "",
  });

  const handleUpdateArticle = (
    updatedData: IUpdateArticleProps | undefined
  ) => {
    updateArticle({ updatedData, articleId })
      .unwrap()
      .then(() => {
        navigate(`${ARTICLE_PATH}/${articleId}`);
      })
      .catch((error) => {
        isError &&
          showNotification(
            getErrorMessage((error as FetchBaseQueryError).data) ||
              "Some error occurred...",
            "error"
          );
      });
  };
  const handleDeleteArticle = () => {
    try {
      deleteArticle({ articleId });
      showNotification("Article was deleted!", "success");
      navigate(HOME_PATH);
    } catch (error) {
      showNotification(
        getErrorMessage((error as FetchBaseQueryError).data) ||
          "Some error occurred...",
        "error"
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <FullHeightSpinner size={110} />
        </LoaderWrapper>
      ) : (
        <UpdatePostWrapper>
          <EditorWrapper>
            <Editor
              articleData={data}
              onSubmitUpdate={handleUpdateArticle}
              onDelete={handleDeleteArticle}
            />
          </EditorWrapper>
          <AuthorRules />
        </UpdatePostWrapper>
      )}
    </>
  );
};
