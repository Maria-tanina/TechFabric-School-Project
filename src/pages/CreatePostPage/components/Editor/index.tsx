import { ButtonsWrapper, StyledEditorWrapper, StyledReactQuill } from "./style";
import { TopEditor } from "../TopEditor";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import {
  clearAllFields,
  setContent,
  setShowPreview,
} from "@features/article/articleSlice";
import {
  selectArticleContent,
  selectArticleImage,
  selectArticleTags,
  selectArticleType,
  selectArticleTitle,
  selectShowPreview,
  selectArticleDescription,
} from "@features/article/articleSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import "react-quill/dist/quill.snow.css";
import { ArticlePreview } from "@components/ArticlePreview";
import { usePublishArticleMutation } from "@services/articlesApi";
import { selectUserId } from "@services/authSelectors";
import { useNotification } from "@hooks/useNotification";
import { useNavigate } from "react-router-dom";
import { MY_ARTICLES_PATH } from "@constants/paths";

const Editor = () => {
  const [publishArticle] = usePublishArticleMutation();

  const content = useAppSelector(selectArticleContent);

  const showPreviewArticle = useAppSelector(selectShowPreview);

  const image = useAppSelector(selectArticleImage);

  const title = useAppSelector(selectArticleTitle);

  const description = useAppSelector(selectArticleDescription);

  const tags = useAppSelector(selectArticleTags);

  const sportType = useAppSelector(selectArticleType);

  const userId = useAppSelector(selectUserId);

  const { showNotification } = useNotification();

  const navigate = useNavigate();

  const article = {
    image,
    title,
    tags,
    type: sportType,
    content,
  };

  const dispatch = useAppDispatch();

  const handleEditorChange = (value: string) => {
    dispatch(setContent(value));
  };

  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold"],
      ["italic"],
      ["link"],
      [{ list: "bullet" }],
      ["blockquote"],
      ["image"],
    ],
  };

  const handlePreviewButtonClick = () => {
    dispatch(setShowPreview());
    window.scrollTo(0, 0);
  };

  const handlePublishButtonClick = async () => {
    const isValid = title && description && image.base64String;

    if (isValid) {
      const article = {
        title,
        sport: sportType,
        description,
        image: image.base64String,
        tags,
        author: userId as string,
        content,
      };
      try {
        await publishArticle(article).unwrap();
        dispatch(clearAllFields());
        showNotification("Your post has been sent for moderation", "success");
        navigate(MY_ARTICLES_PATH);
        if (showPreviewArticle) {
          dispatch(setShowPreview());
        }
      } catch (error) {
        showNotification("Some error occurred...", "error");
      }
    } else {
      showNotification("Fill all required fields!", "error");
    }
  };

  return (
    <StyledEditorWrapper>
      {showPreviewArticle ? (
        <ArticlePreview article={article} />
      ) : (
        <>
          <TopEditor />

          <StyledReactQuill
            theme="snow"
            value={content}
            onChange={handleEditorChange}
            modules={modules}
            placeholder="Write your article content here..."
          />
        </>
      )}
      <ButtonsWrapper>
        <OutlinedButton $width="240px" onClick={handlePublishButtonClick}>
          Publish Article
        </OutlinedButton>
        <GhostButton $width="240px" onClick={handlePreviewButtonClick}>
          {showPreviewArticle ? "Edit Article" : "Preview Article"}
        </GhostButton>
      </ButtonsWrapper>
    </StyledEditorWrapper>
  );
};

export default Editor;
