import styled from "styled-components";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export const StyledWriteMoreCard = styled(Card)`
  &.MuiPaper-root {
    max-width: 100%;
    height: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9d9b9b47;
    transition: 0.4s ease-in-out;
    &:hover {
      background-color: #9d9b9b87;
    }
  }
`;

export const StyledWriteMoreLink = styled(Link)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1 0 auto;
`;
