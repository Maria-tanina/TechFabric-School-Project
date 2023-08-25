import styled from "styled-components";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledArticleCard = styled(Card)`
  &.MuiPaper-root {
    max-width: 940px;
    border-radius: 8px;
    box-shadow: none;
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
  justify-content: space-between;
`;

export const StyledTags = styled.div(
  ({ theme: { colors } }) => `
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray};
`
);

export const StyledIconButton = styled(IconButton)(
  ({ theme: { colors } }) => `
  &.MuiButtonBase-root {
    height: 32px;
    width: 32px;
    border-radius: 6px;
    transition: all 0.4s ease-in-out;
    
    &:hover {
      background: rgba(254, 222, 36, 0.1);
    }
    
    &:active {
      background-color: transparent;
    }
    
    .MuiSvgIcon-root {
      transition: fill 0.4s ease-in-out;
      fill: ${colors.black};
    }

    .favorite-icon {
      display: none;
      fill: ${colors.main};
    }

    &:hover .favorite-border-icon {
      display: none;
    }

    &:hover .favorite-icon {
      display: block;
    }
  }
`
);
