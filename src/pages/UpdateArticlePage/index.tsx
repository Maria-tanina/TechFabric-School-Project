import Editor from "@pages/CreatePostPage/components/Editor";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import { IUpdateArticleProps } from "@customTypes/articleTypes";
import { getErrorMessage, getErrorTitle } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectUserId, selectUserIsAdmin } from "@services/authSelectors";
import { setShowPreview } from "@features/article/articleSlice";
import { Spinner } from "@components/Spinner/style";

export const UpdateArticlePage = () => {
  const { articleId = "" } = useParams<{ articleId?: string | undefined }>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const isAdmin = useAppSelector(selectUserIsAdmin);
  const userId = useAppSelector(selectUserId);
  const [updateArticle, { isError, isSuccess, isLoading: isUpdateLoading }] =
    useUpdateArticleMutation();
  const [deleteArticle, { isLoading: isDeleteLoading }] =
    useDeleteArticleMutation();

  const { data, isLoading } = useGetArticleInfoQuery({
    articleId: articleId || "",
  });

  const isAuthorOfCurrentArticle =
    !!userId && !!data && userId === data.author.id;

  const dispatch = useAppDispatch();

  isAdmin && dispatch(setShowPreview(true));

  const handleUpdateArticle = (
    updatedData: IUpdateArticleProps | undefined
  ) => {
    window.scrollTo(0, 0);
    updateArticle({ updatedData, articleId })
      .unwrap()
      .then(() => {
        navigate(`${ARTICLE_PATH}/${articleId}`);
        isSuccess && showNotification("Article was updated", "success");
      })
      .catch((error) => {
        isError &&
          showNotification(
            getErrorTitle(error) || "Some error occurred...",
            "error"
          );
      });
  };
  const handleDeleteArticle = () => {
    window.scrollTo(0, 0);
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

  if (data && !isAuthorOfCurrentArticle && !isAdmin) {
    return <Navigate to={HOME_PATH} />;
  }

  return (
    <>
      {isLoading || isUpdateLoading || isDeleteLoading ? (
        <LoaderWrapper style={{ height: "calc(100vh - 264px)" }}>
          <Spinner size={110} />
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
        </UpdatePostWrapper>
      )}
    </>
  );
};
