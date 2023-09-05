import { ButtonsWrapper, StyledEditorWrapper, StyledReactQuill } from "./style";
import { TopEditor } from "../TopEditor";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import { setContent, setShowPreview } from "@features/article/articleSlice";
import {
  selectArticleContent,
  selectArticleImage,
  selectArticleTags,
  selectArticleThemes,
  selectArticleTitle,
  selectShowPreview,
} from "@features/article/articleSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import "react-quill/dist/quill.snow.css";
import { ArticlePreview } from "@components/ArticlePreview";

const Editor = () => {
  const content = useAppSelector(selectArticleContent);

  const showPreviewArticle = useAppSelector(selectShowPreview);

  const image = useAppSelector(selectArticleImage);

  const title = useAppSelector(selectArticleTitle);

  const tags = useAppSelector(selectArticleTags);

  const themes = useAppSelector(selectArticleThemes);

  const article = {
    image,
    title,
    tags,
    themes,
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
        <OutlinedButton $width="240px">Publish Article</OutlinedButton>
        <GhostButton $width="240px" onClick={handlePreviewButtonClick}>
          {showPreviewArticle ? "Edit Article" : "Preview Article"}
        </GhostButton>
      </ButtonsWrapper>
    </StyledEditorWrapper>
  );
};

export default Editor;
