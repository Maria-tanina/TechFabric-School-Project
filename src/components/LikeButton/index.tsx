import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FC, useEffect, useState } from "react";
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
  useRemoveLikeMutation,
} from "@services/favoritesApi";

interface ILikeButtonProps {
  articleId: string;
  showText: boolean;
  size: string;
  isLiked: boolean;
}

export const AddLikeButton: FC<ILikeButtonProps> = ({
  size,
  articleId,
  isLiked,
}) => {
  const isLogin = useAppSelector(selectIsLogin);
  const [
    isCurrentArticleAddedToFavorites,
    setIsCurrentArticleAddedToFavorites,
  ] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const navigate = useNavigate();
  const [isPostLiked, setIsPostLiked] = useState(isLiked);

  useEffect(() => {
    setIsPostLiked(false);
  }, [!isLogin]);
  useEffect(() => {
    setIsPostLiked(isLiked);
  }, [isLiked]);

  const { showNotification } = useNotification();

  const handleToggleLike = async () => {
    if (!isLogin) {
      navigate(LOGIN_PATH);
    } else {
      setIsButtonDisabled(true);
      if (isPostLiked) {
        try {
          await removeLike(articleId).unwrap();
          setIsPostLiked(!isPostLiked);
          showNotification("The article was deleted from likes.", "success");
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
          setIsPostLiked(!isPostLiked);
          showNotification("The article was added to likes.", "success");
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
  const iconToShow = isPostLiked ? (
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
      $isCurrentArticleAddedToFavorites={isPostLiked}
      $size={size}
    >
      <FavoriteIcon className="favoriteFilledHoverIcon" />
    </LikeButton>
  );
};
