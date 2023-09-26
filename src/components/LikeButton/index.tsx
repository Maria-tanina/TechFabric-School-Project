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
import {
  useAddLikeMutation,
  useGetLikesPostQuery,
  useRemoveLikeMutation,
} from "@services/favoritesApi";

interface ILikeButtonProps {
  articleId: string;
  showText: boolean;
  size: string;
}

export const AddLikeButton: FC<ILikeButtonProps> = ({ size, articleId }) => {
  const isLogin = useAppSelector(selectIsLogin);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const { data: fetchLikes } = useGetLikesPostQuery(undefined, {
    skip: !isLogin,
  });
  const isLike = Array.isArray(fetchLikes) && fetchLikes.includes(articleId);
  const navigate = useNavigate();
  const [
    isCurrentArticleAddedToFavorites,
    setIsCurrentArticleAddedToFavorites,
  ] = useState<boolean>(false);

  const { showNotification } = useNotification();

  const handleToggleLike = async () => {
    if (!isLogin) {
      navigate(LOGIN_PATH);
    } else {
      setIsButtonDisabled(true);
      if (isLike) {
        try {
          await removeLike(articleId).unwrap();
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
          await addLike(articleId).unwrap();
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
  const iconToShow = isLike ? (
    <FavoriteIcon />
  ) : (
    <FavoriteBorderIcon className="favoriteBorderIcon" />
  );
  return (
    <LikeButton
      disableRipple
      onClick={handleToggleLike}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      $isCurrentArticleAddedToFavorites={isLike}
      $size={size}
    >
      <FavoriteIcon className="favoriteFilledHoverIcon" />
    </LikeButton>
  );
};
