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

interface IFavoriteButtonProps {
  articleId: string;
  size: string;
  showText: boolean;
  isFavorite: boolean;
}

export const AddFavoriteButton: FC<IFavoriteButtonProps> = ({
  articleId,
  size,
  showText,
  isFavorite,
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const isLogin = useAppSelector(selectIsLogin);
  const { showNotification } = useNotification();
  const [isPostAddToFavorite, setIsPostAddToFavorite] = useState(isFavorite);

  useEffect(() => {
    setIsPostAddToFavorite(false);
  }, [isLogin]);
  useEffect(() => {
    setIsPostAddToFavorite(isFavorite);
  }, [isFavorite]);

  const textToShow = isPostAddToFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  useEffect(() => {
    if (!isLogin) {
      setIsButtonDisabled(true);
    }
  }, [isLogin]);

  const iconToShow = isPostAddToFavorite ? (
    <Bookmark />
  ) : (
    <BookmarkBorderIcon className="favoriteBorderIcon" />
  );

  const handleToggleFavorites = async () => {
    setIsButtonDisabled(true);
    if (isPostAddToFavorite) {
      try {
        await removeFromFavorites({ articleId }).unwrap();
        setIsPostAddToFavorite(!isPostAddToFavorite);
        showNotification("The article was deleted from favorites.", "success");
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
