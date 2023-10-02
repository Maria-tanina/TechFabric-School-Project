import { FC, useEffect, useState } from "react";
import { getErrorTitle } from "@helpers/errorHandlers";
import { useNotification } from "@hooks/useNotification";
import { useAppSelector } from "../../store";
import { FavoriteButton } from "./style";
import { selectIsLogin } from "@features/user/usersSelectors";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "@services/favoritesApi";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Bookmark } from "@mui/icons-material";
import { selectFavoritesPostIds } from "@services/favoritesSelectors";
import { LOGIN_PATH } from "@constants/paths";
import { useNavigate } from "react-router-dom";

interface IFavoriteButtonProps {
  articleId: string;
  size: string;
  showText: boolean;
}

export const AddFavoriteButton: FC<IFavoriteButtonProps> = ({
  articleId,
  size,
  showText,
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const isLogin = useAppSelector(selectIsLogin);
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const favoritesPostsId = useAppSelector(selectFavoritesPostIds);
  const isFavorites =
    isLogin &&
    Array.isArray(favoritesPostsId) &&
    favoritesPostsId?.includes(articleId as string);
  const [isPostAddToFavorite, setIsPostAddToFavorite] = useState(isFavorites);

  useEffect(() => {
    setIsPostAddToFavorite(isFavorites);
  }, [isFavorites]);

  const textToShow = isPostAddToFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  const iconToShow = isPostAddToFavorite ? (
    <Bookmark />
  ) : (
    <BookmarkBorderIcon className="favoriteBorderIcon" />
  );

  const handleToggleFavorites = async () => {
    if (!isLogin) {
      navigate(LOGIN_PATH);
    } else {
      setIsButtonDisabled(true);
      if (isPostAddToFavorite) {
        try {
          await removeFromFavorites({ articleId }).unwrap();
          setIsPostAddToFavorite(!isPostAddToFavorite);
          showNotification(
            "The article was deleted from favorites.",
            "success"
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
          await addToFavorites({ articleId }).unwrap();
          setIsPostAddToFavorite(!isPostAddToFavorite);
          showNotification("The article was added to favorites.", "success");
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
    <FavoriteButton
      disableRipple
      onClick={handleToggleFavorites}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      $isCurrentArticleAddedToFavorites={isPostAddToFavorite}
      $size={size}
    >
      {showText ? <span>{textToShow}</span> : null}
      <BookmarkBorderIcon className="favoriteFilledHoverIcon" />
    </FavoriteButton>
  );
};
