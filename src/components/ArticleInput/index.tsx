import styled from "styled-components";
import { TextField, TextFieldProps } from "@mui/material";

export const ArticleInput = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root.MuiOutlinedInput-root {
    border: none;
    border-radius: 0;
    font-size: 52px;
    font-weight: 700;
    line-height: 78px;
    height: 78px;
  }
`;

export const SmallArticleInput = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root.MuiOutlinedInput-root {
    border: none;
    border-radius: 0;
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    height: 30px;
  }
`;
