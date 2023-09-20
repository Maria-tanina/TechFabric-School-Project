import Editor from "@pages/CreatePostPage/components/Editor";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteArticleMutation,
  useGetArticleInfoQuery,
  useGetMyArticlesQuery,
  useUpdateArticleMutation,
} from "@services/articlesApi";
import { useNotification } from "@hooks/useNotification";
import { ARTICLE_PATH, HOME_PATH } from "@constants/paths";
import {
  EditorWrapper,
  LoaderWrapper,
  UpdatePostWrapper,
} from "@pages/UpdateArticlePage/style";
import { FullHeightSpinner } from "@components/Spinner";
import { IUpdateArticleProps } from "@customTypes/articleTypes";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectUserIsAdmin } from "@services/authSelectors";
import { setShowPreview } from "@features/article/articleSlice";
import {
  selectMyArticleOrderBy,
  selectMyArticlePageNumber,
  selectMyArticlePageSize,
} from "@features/myArticle/myArticleSelectors";

export const UpdateArticlePage = () => {
  const { articleId = "" } = useParams<{ articleId?: string | undefined }>();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const isAdmin = useAppSelector(selectUserIsAdmin);
  const [updateArticle, { isError, isSuccess }] = useUpdateArticleMutation();
  const [deleteArticle] = useDeleteArticleMutation();
  const pageNumber = useAppSelector(selectMyArticlePageNumber);

  const pageSize = useAppSelector(selectMyArticlePageSize);

  const orderBy = useAppSelector(selectMyArticleOrderBy);

  const { data, isLoading } = useGetArticleInfoQuery({
    articleId: articleId || "",
  });

  const { data: articlesData } = useGetMyArticlesQuery({
    pageNumber,
    pageSize,
    orderBy,
  });

  const myArticles = articlesData?.articles || [];

  const isAuthorOfCurrentArticle = myArticles?.some(
    (article) => article.id === articleId
  );

  const dispatch = useAppDispatch();

  isAdmin && dispatch(setShowPreview(true));

  const handleUpdateArticle = (
    updatedData: IUpdateArticleProps | undefined
  ) => {
    updateArticle({ updatedData, articleId })
      .unwrap()
      .then(() => {
        navigate(`${ARTICLE_PATH}/${articleId}`);
        isSuccess && showNotification("Article was updated", "success");
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

  if (!isAuthorOfCurrentArticle && !isAdmin) {
    return <Navigate to={HOME_PATH} />;
  }

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
        </UpdatePostWrapper>
      )}
    </>
  );
};
