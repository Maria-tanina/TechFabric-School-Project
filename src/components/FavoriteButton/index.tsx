import { FC, useEffect, useState } from "react";
import { LIKE_BUTTON_DISABLE } from "@constants/timers";
import { getErrorTitle } from "@helpers/errorHandlers";
import { useNotification } from "@hooks/useNotification";
import { useAppSelector } from "../../store";
import { FavoriteButton } from "./style";
import { selectIsLogin } from "@features/user/usersSelectors";
import {
  useAddToFavoritesMutation,
  useGetFavoritesQuery,
  useRemoveFromFavoritesMutation,
} from "@services/favoritesApi";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Bookmark } from "@mui/icons-material";
import {
  selectOrderBy,
  selectPageNumber,
  selectPageSize,
} from "@features/article/articleSelectors";

interface IFavoriteButtonProps {
  articleId: string;
  size: string;
}

export const AddFavoriteButton: FC<IFavoriteButtonProps> = ({
  articleId,
  size,
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const isLogin = useAppSelector(selectIsLogin);
  const pageNumber = useAppSelector(selectPageNumber);
  const pageSize = useAppSelector(selectPageSize);
  const { showNotification } = useNotification();
  const orderBy = useAppSelector(selectOrderBy);
  const { data: fetchFavorites } = useGetFavoritesQuery({
    pageNumber,
    pageSize,
    orderBy,
  });
  const isFavorite =
      Array.isArray(fetchFavorites) && fetchFavorites.includes(articleId);

  useEffect(() => {
    if (!isLogin) {
      setIsButtonDisabled(true);
    }
  }, [isLogin]);


  const iconToShow = isFavorite ? (
    <Bookmark />
  ) : (
    <BookmarkBorderIcon className="favoriteBorderIcon" />
  );

  const handleToggleLike = async () => {
    setIsButtonDisabled(true);
    if (isFavorite) {
      try {
        await removeFromFavorites({ articleId }).unwrap();
        showNotification("The article was deleted from favorites.", "success");
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
        await addToFavorites({ articleId }).unwrap();
        showNotification("The article was added to favorites.", "success");
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
    <FavoriteButton
      disableRipple
      onClick={handleToggleLike}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      $isCurrentArticleAddedToFavorites={isFavorite}
      $size={size}
    >
      <BookmarkBorderIcon className="favoriteFilledHoverIcon" />
    </FavoriteButton>
  );
};
