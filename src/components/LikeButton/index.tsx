import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FC, useState } from "react";
import { getErrorTitle } from "@helpers/errorHandlers";
import { useNotification } from "@hooks/useNotification";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LikeButton } from "./style";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "@constants/paths";

interface ILikeButtonProps {
  articleId: string;
  showText: boolean;
  size: string;
}

export const AddLikeButton: FC<ILikeButtonProps> = ({ size }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const isLogin = useAppSelector(selectIsLogin);

  const navigate = useNavigate();

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
    if (!isLogin) {
      navigate(LOGIN_PATH);
    } else {
      setIsButtonDisabled(true);
      if (isCurrentArticleAddedToFavorites) {
        try {
          showNotification(
            "The article was deleted from favorites.",
            "success"
          );
          setIsCurrentArticleAddedToFavorites(
            !isCurrentArticleAddedToFavorites
          );
        } catch (error) {
          showNotification(
            getErrorTitle(error) || "Some error occurred...",
            "error"
          );
        } finally {
          setIsButtonDisabled(false);
        }
      } else {
        try {
          showNotification("The article was added to favorites.", "success");
          setIsCurrentArticleAddedToFavorites(
            !isCurrentArticleAddedToFavorites
          );
        } catch (error) {
          showNotification(
            getErrorTitle(error) || "Some error occurred...",
            "error"
          );
        } finally {
          setIsButtonDisabled(false);
        }
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
