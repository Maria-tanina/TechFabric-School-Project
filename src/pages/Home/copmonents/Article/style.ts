import styled from "styled-components";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";

export const StyledCardTitle = styled(Typography)(({theme: {fontSizes, colors}}) =>`
  &.MuiTypography-root {
    font-size: ${fontSizes.cardHeader};
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 12px;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${colors.main}
    }
  }
`);

export const StyledCardContent = styled(CardContent)`
  &.MuiCardContent-root {
    padding: 25px 55px ;
  }
`;

export const StyledCardHeader = styled(CardHeader)`
  &.MuiCardHeader-root {
    padding: 0;
    margin-bottom: 20px;
    
    .MuiTypography-root{
      line-height: 24px;
      font-size: 16px;
    }
    
    .MuiCardHeader-title {
      font-weight: 700;
    }
  }
`;

export const StyledAvatar = styled(Avatar)(({theme: {colors}}) =>`
  &.MuiAvatar-root {
    width: 44px;
    height: 44px;
    background-color: ${colors.main}
  }
`);

export const StyledTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTags = styled.div(({theme: {colors}}) =>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray}
`);

export const StyledIconButton = styled(IconButton)(({theme: {colors}}) =>`
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
      fill: ${colors.black}
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
`);