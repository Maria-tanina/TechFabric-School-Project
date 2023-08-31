import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledIconButton } from "@components/LikeButton/style";

export const LikeButton = () => {
  return (
    <StyledIconButton aria-label="like" disableRipple>
      <FavoriteBorderIcon className="favorite-border-icon" />
      <FavoriteIcon className="favorite-icon" />
    </StyledIconButton>
  );
};
