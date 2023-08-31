import styled from "styled-components";
import { Input } from "@mui/material";

export const CommentsInput = styled(Input)(
  ({ theme: { colors } }) => `
    color: ${colors.gray};
    padding: 10px 16px;
`
);

export const CommentsButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 32px;
  .MuiButtonBase-root.MuiButton-root {
    width: 216px;
  }
`;
export const StyledCommentForm = styled.form`
  margin-bottom: 40px;
`;
