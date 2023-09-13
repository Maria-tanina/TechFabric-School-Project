import Editor from "@pages/CreatePostPage/components/Editor";
import {useNavigate, useParams} from "react-router-dom";
import {useGetArticleInfoQuery, useUpdateArticleMutation} from "@services/articlesApi";
import {useNotification} from "@hooks/useNotification";
import {ARTICLE_PATH} from "@constants/paths";
import {LoaderWrapper, UpdatePostWrapper} from "@pages/UpdateArticlePage/style";
import {AuthorRules} from "@components/AuthorRules";
import {FullHeightSpinner} from "@components/Spinner";
import {IUpdateArticleProps} from "@customTypes/articleTypes";


export const UpdateArticlePage = () => {
    const {articleId = ""} = useParams<{ articleId?: string | undefined }>();
    const navigate = useNavigate();
    const {showNotification} = useNotification();
    const [updateArticle] = useUpdateArticleMutation();

    const {data, isLoading, isError} = useGetArticleInfoQuery({
        articleId: articleId || "",
    });
    const handleUpdateArticle = (updatedData: IUpdateArticleProps | undefined) => {
        updateArticle({data: updatedData, articleId})
            .unwrap()
            .then(() => {
                console.log(data)
                navigate(`${ARTICLE_PATH}/${articleId}`)
            })
            .catch(() => {
                isError && showNotification("Something wrong!", "error")
                console.log(data)
            });
        console.log(data)
    };


    return (
        <>
            {isLoading ? (<LoaderWrapper><FullHeightSpinner size={110}/></LoaderWrapper>) : (
                <UpdatePostWrapper>
                    <Editor articleData={data} onSubmitUpdate={handleUpdateArticle}/>
                    <AuthorRules/>
                </UpdatePostWrapper>
            )}
        </>
    );
};
