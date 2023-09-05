import { ButtonsWrapper, StyledEditorWrapper, StyledReactQuill } from "./style";
import { TopEditor } from "../TopEditor";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import { Link } from "react-router-dom";
import { ARTICLE_PREVIEW_PATH } from "@constants/paths";
import { setContent } from "@features/article/articleSlice";
import { selectArticleContent } from "@features/article/articleSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const content = useAppSelector(selectArticleContent);

  const dispatch = useAppDispatch();

  const handleEditorChange = (value: string) => {
    dispatch(setContent(value));
  };

  const modules = {
    toolbar: [
      ["bold"],
      ["italic"],
      ["link"],
      [{ list: "bullet" }],
      ["blockquote"],
      ["image"],
    ],
  };

  return (
    <StyledEditorWrapper>
      <TopEditor />

      <StyledReactQuill
        theme="snow"
        value={content}
        onChange={handleEditorChange}
        modules={modules}
        placeholder="Write your article content here..."
      />
      <ButtonsWrapper>
        <OutlinedButton $width="240px">Publish Article</OutlinedButton>
        <GhostButton $width="240px">
          <Link to={ARTICLE_PREVIEW_PATH}>Preview Article</Link>
        </GhostButton>
      </ButtonsWrapper>
    </StyledEditorWrapper>
  );
};

export default Editor;
