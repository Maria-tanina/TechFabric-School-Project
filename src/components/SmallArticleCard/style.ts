import styled from "styled-components";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

export const StyledCardActionArea = styled(CardActionArea)`
  &.MuiCardActionArea-root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: 100%;
  }
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
  flex-grow: 1;
  word-break: break-all;
`
);

export const StyledLinksWrapper = styled.div(
  ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid ${colors.strokeGray};
`
);

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
  flex-grow: 1;
`;

export const StyledCardDataBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
