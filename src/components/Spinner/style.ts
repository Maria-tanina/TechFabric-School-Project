import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { Box } from "@mui/material";
import { LoaderWrapper } from "@pages/UpdateArticlePage/style";

export const Spinner = styled(CircularProgress)(
  ({ theme: { colors } }) => `
  &.MuiCircularProgress-root {
    margin: auto;
    color: ${colors.main};
  }
`
);

export const BoxForSpinner = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const LoaderWrapperWithHeader = styled(LoaderWrapper)`
  height: calc(100vh - 264px);
`;
