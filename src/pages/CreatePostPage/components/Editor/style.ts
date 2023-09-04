import styled from "styled-components";
import ReactQuill from "react-quill";

export const StyledEditorWrapper = styled.div`
  width: 65%;
  flex-shrink: 0;
`;

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    height: 56px;
  }
  .ql-toolbar,
  .ql-container {
    border: 2px solid #d4d4d4;
    padding: 14px 32px;
    background-color: #fff;
  }
  .ql-toolbar button {
    padding: 0;
  }
  .ql-toolbar .ql-formats {
    margin-right: 32px;
  }
  .ql-container {
    border-radius: 0 0 8px 8px;
    min-height: 400px;
  }
  .ql-editor {
    min-height: 400px;
    padding: 12px 0;
  }
  .ql-editor.ql-blank::before,
  .ql-editor p {
    font-family: Archivo;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .ql-editor.ql-blank::before {
    color: #676767;
    left: 33px;
  }

  .ql-editor p {
    color: #060606;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
`;
