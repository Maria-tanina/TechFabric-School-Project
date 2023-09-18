import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const StyledPagination = styled(Pagination)(
  ({ theme: { colors } }) => `
  padding-top: 70px;
  
  .MuiPagination-ul {
    justify-content: center;
  }
  .MuiPaginationItem-root {
    border-width: 2px;
    background-color: transparent;
  }
  .MuiPaginationItem-root.Mui-selected {
    border-color: ${colors.main};
     background-color: transparent;
  }
`
);
