import styled from "styled-components";
import ReactQuill from "react-quill";

export const StyledEditorWrapper = styled.form`
  width: 65%;
  flex-shrink: 0;
`;

export const StyledReactQuill = styled(ReactQuill)`
  .ql-toolbar {
    height: auto;
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
    &:not(:last-child) {
      margin-right: 32px;
    }
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
    font-family: "Archivo", sans-serif;
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
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

export const StyledTopEditor = styled.div(
  ({ theme: { colors } }) => `
  border: 2px solid ${colors.strokeGray};
  background-color: ${colors.white};
  border-bottom: none;
  padding: 32px;
  min-height: 346px;
  border-radius: 8px 8px 0px 0px;
  
  .MuiAutocomplete-popper {
    ul li:first-child {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px; 
      color: ${colors.black};
      opacity: 1;
      border-bottom: 2px solid ${colors.strokeGray};
    }
  }
`
);

export const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: start;
  min-height: 75px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SecondText = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 60%;
`
);

export const HiddenFileInput = styled.input`
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  right: 0;
`;
