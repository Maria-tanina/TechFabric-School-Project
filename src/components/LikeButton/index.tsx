import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "@services/favoritesApi";
import { FC, useState } from "react";
import { LIKE_BUTTON_DISABLE } from "@constants/timers";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNotification } from "@hooks/useNotification";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteButton } from "./style";

interface ILikeButtonProps {
  articleId: string;
  showText: boolean;
}

export const LikeButton: FC<ILikeButtonProps> = ({ articleId, showText }) => {
  const [addToFavorites] = useAddToFavoritesMutation();

  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  //temporary variable
  const [
    isCurrentArticleAddedToFavorites,
    setIsCurrentArticleAddedToFavorites,
  ] = useState<boolean>(false);

  const { showNotification } = useNotification();

  const iconToShow = isCurrentArticleAddedToFavorites ? (
    <FavoriteIcon />
  ) : (
    <FavoriteBorderIcon />
  );

  const textToShow = isCurrentArticleAddedToFavorites
    ? "Remove from favorites"
    : "Add to favorites";

  const handleToggleLike = async () => {
    setIsButtonDisabled(true);
    if (isCurrentArticleAddedToFavorites) {
      try {
        await removeFromFavorites({ articleId }).unwrap();
        setTimeout(() => setIsButtonDisabled(false), LIKE_BUTTON_DISABLE);
        showNotification(
          "The article was deleted from your favorites.",
          "success"
        );
        setIsCurrentArticleAddedToFavorites(!isCurrentArticleAddedToFavorites);
      } catch (error) {
        showNotification(
          getErrorMessage((error as FetchBaseQueryError).data) ||
            "Some error occurred...",
          "error"
        );
      }
    } else {
      try {
        await addToFavorites({ articleId }).unwrap();
        setTimeout(() => setIsButtonDisabled(false), LIKE_BUTTON_DISABLE);
        showNotification("The article was added to your favorites.", "success");
        setIsCurrentArticleAddedToFavorites(!isCurrentArticleAddedToFavorites);
      } catch (error) {
        showNotification(
          getErrorMessage((error as FetchBaseQueryError).data) ||
            "Some error occurred...",
          "error"
        );
      }
    }
  };
  return (
    <FavoriteButton
      disableRipple
      onClick={handleToggleLike}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      isCurrentArticleAddedToFavorites={isCurrentArticleAddedToFavorites}
    >
      {showText ? <span>{textToShow}</span> : null}
    </FavoriteButton>
  );
};
