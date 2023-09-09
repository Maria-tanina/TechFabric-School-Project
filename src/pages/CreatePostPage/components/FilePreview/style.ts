import styled from "styled-components";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  &.MuiButtonBase-root {
    position: absolute;
    right: -13px;
    top: -13px;
  }
`;

export const FilePreviewWrapper = styled.div`
  position: relative;
  max-width: 60%;
`;
