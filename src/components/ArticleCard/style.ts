import styled from "styled-components";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

export const StyledArticleCard = styled(Card)`
  &.MuiPaper-root.MuiPaper-elevation {
    border-radius: 8px;
    box-shadow: none;
    border: none;
  }
`;

export const StyledCardTitle = styled(Typography)(
  ({ theme: { fontSizes, colors, media } }) => `
  &.MuiTypography-root {
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin: 20px 0 12px;
    transition: all 0.4s ease-in-out;
    ${media.desktop}{
        font-size: ${fontSizes.cardHeader};
        line-height: 48px;
    }
    &:hover {
      color: ${colors.main};
    }
  }
`
);

export const StyledCardContent = styled(CardContent)(
  ({ theme: { colors } }) => `
  &.MuiCardContent-root {
    padding: 25px 55px ;
    border-radius: 0px 0px 8px 8px;
    border-right: 2px solid ${colors.strokeGray};
    border-bottom: 2px solid ${colors.strokeGray};
    border-left: 2px solid ${colors.strokeGray};
  }
`
);

export const StyledTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
