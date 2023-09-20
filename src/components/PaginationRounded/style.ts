import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const StyledPagination = styled(Pagination)(
  ({ theme: { colors } }) => `
padding-top: 70px;

.MuiPagination-ul {
justify-content: center;
}

.MuiPaginationItem-root {
transition: .4s ease-in-out;
border-width: 2px;
border-color: ${colors.strokeGray};
background-color: transparent;
}

.MuiPaginationItem-root:hover {
border-color: ${colors.main};
background-color: transparent;
color: ${colors.main};
}

.MuiPaginationItem-root.Mui-selected, .MuiPaginationItem-root.Mui-selected:hover {
border-color: ${colors.main};
background-color: ${colors.lightYellow};
color: ${colors.main};
}
`
);
