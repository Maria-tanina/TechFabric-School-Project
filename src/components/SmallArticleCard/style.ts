import styled from "styled-components";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const StyledMetaData = styled.div(
    ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  color: ${colors.gray};
  font-size: 15px;
  
  .MuiSvgIcon-root {
    font-size: 17px;
    color: ${colors.gray}
  } 
`
);

export const StyledCard = styled(Card)`
  word-wrap: break-word;
  height: 100%;
`;
export const StyledTitle = styled(Typography)(
    ({ theme: { colors } }) => `
  transition: .4s ease-in-out;
  &:hover {
    color: ${colors.main}
  }
`
);

export const StyledDescription = styled.div(
    ({ theme: { colors } }) => `
  margin-bottom: 10px;
  color: ${colors.gray};
  font-size: 15px;
  min-height: 72px;
  border-bottom: 1px solid ${colors.strokeGray};
  flex-grow: 1;
`
);

export const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)(
    ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  gap: 10px;
  transition: .4s ease-in-out;
  
  &:hover {
    color: ${colors.main}
  }
`
);

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  min-height: 239px;
`;

export const StyledCardDataBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
