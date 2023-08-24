import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";

export const StyledTablePaper = styled(Paper)`
  width: 100%;
  overflow: hidden;
`;

export const StyledTableContainer = styled(TableContainer)`
  min-height: 620px;
`;

export const StyledTableBody = styled(TableBody)`
  position: relative;
`;

export const StyledMessage = styled.div(
  ({ theme: { colors, fonts } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  padding: 45px 0;
  
  svg {
    font-size: 60px;
    path {
      fill: ${colors.gray}
    }
  }
`
);

export const StyledTypography = styled(Typography)(
  ({ theme: { colors, fonts } }) => `
  &.MuiTypography-root {
    text-align: center;
    font-size: 16px;
    color: ${colors.gray};
    font-weight: 700;
    letter-spacing: 0.01071em;
    font-family: ${fonts.main}
  }
`
);
