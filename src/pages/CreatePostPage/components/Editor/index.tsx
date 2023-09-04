import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { ButtonsWrapper, StyledEditorWrapper, StyledReactQuill } from "./style";
import { TopEditor } from "@pages/CreatePostPage/components/TopEditor";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import { Link } from "react-router-dom";
import { ARTICLE_PREVIEW_PATH } from "@constants/paths";

const Editor = () => {
  const [value, setValue] = useState("");

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
        value={value}
        onChange={setValue}
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
