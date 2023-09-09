import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import { Box } from "@mui/material";

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
