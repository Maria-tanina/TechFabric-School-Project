import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FC, useEffect, useState } from "react";
import { LIKE_BUTTON_DISABLE } from "@constants/timers";
import { getErrorTitle } from "@helpers/errorHandlers";
import { useNotification } from "@hooks/useNotification";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LikeButton } from "./style";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";

interface ILikeButtonProps {
  articleId: string;
  showText: boolean;
  size: string;
}

export const AddLikeButton: FC<ILikeButtonProps> = ({ size }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const isLogin = useAppSelector(selectIsLogin);

  useEffect(() => {
    if (!isLogin) {
      setIsButtonDisabled(true);
    }
  }, [isLogin]);

  const [
    isCurrentArticleAddedToFavorites,
    setIsCurrentArticleAddedToFavorites,
  ] = useState<boolean>(false);

  const { showNotification } = useNotification();

  const iconToShow = isCurrentArticleAddedToFavorites ? (
    <FavoriteIcon />
  ) : (
    <FavoriteBorderIcon className="favoriteBorderIcon" />
  );

  const handleToggleLike = async () => {
    setIsButtonDisabled(true);
    if (isCurrentArticleAddedToFavorites) {
      try {
        showNotification("The article was deleted from favorites.", "success");
        setIsCurrentArticleAddedToFavorites(!isCurrentArticleAddedToFavorites);
      } catch (error) {
        showNotification(
          getErrorTitle(error) || "Some error occurred...",
          "error"
        );
      } finally {
        setTimeout(() => setIsButtonDisabled(false), LIKE_BUTTON_DISABLE);
      }
    } else {
      try {
        showNotification("The article was added to favorites.", "success");
        setIsCurrentArticleAddedToFavorites(!isCurrentArticleAddedToFavorites);
      } catch (error) {
        showNotification(
          getErrorTitle(error) || "Some error occurred...",
          "error"
        );
      } finally {
        setTimeout(() => setIsButtonDisabled(false), LIKE_BUTTON_DISABLE);
      }
    }
  };
  return (
    <LikeButton
      disableRipple
      onClick={handleToggleLike}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      $isCurrentArticleAddedToFavorites={isCurrentArticleAddedToFavorites}
      $size={size}
    >
      <FavoriteIcon className="favoriteFilledHoverIcon" />
    </LikeButton>
  );
};
