import styled from "styled-components";
import { Button, ButtonProps } from "@mui/material";

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
