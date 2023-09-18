import styled from "styled-components";
import { Button, ButtonProps, IconButton } from "@mui/material";

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

interface IFavoriteButtonProps extends ButtonProps {
  $isCurrentArticleAddedToFavorites: boolean;
  $size: string;
}

export const FavoriteButton = styled(Button)<IFavoriteButtonProps>(
  ({ theme: { colors }, $isCurrentArticleAddedToFavorites, $size }) => `
  &.MuiButton-root.MuiButtonBase-root {
    font-size: 16px;
    min-width: 32px;
    font-weight: 400;
    line-height: 24px;
    gap: 12px;
    background-color: transparent;
    color: ${colors.gray};
    transition: .4s ease-in-out;
    position: relative;
    padding: 0;
    
    .favoriteFilledHoverIcon{
      opacity: 0;
      z-index: 100;
      fill: ${colors.main};
      transition: .4s ease-in-out;
      position: absolute;
      right: 0px;
    }
    
    &:hover {
      .favoriteFilledHoverIcon {
        opacity: 1;
      }
    }
    
    svg {
      padding: 5px 4px;
      height: ${$size};
      width: ${$size};
      border-radius: 6px;
      transition: .4s ease-in-out;
    }
    svg path {
      fill: ${$isCurrentArticleAddedToFavorites ? colors.main : colors.black};
      transition: .4s ease-in-out;
    }
    &:hover {
      background-color: transparent;
      svg {
      background-color:  ${colors.lightYellow};
      }
      svg path {
        fill: ${colors.main};
      }
    }
    &.MuiButton-root.Mui-disabled{
      background-color: transparent;
      color: #e5e2e2;
      svg path {
        fill: #e5e2e2;
      }
    }
  }
`
);
