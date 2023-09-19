import styled from "styled-components";
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

  .MuiTableCell-root {
    padding: 6px 16px;
    white-space: break-spaces;
    word-break: break-word;
  }
`;
