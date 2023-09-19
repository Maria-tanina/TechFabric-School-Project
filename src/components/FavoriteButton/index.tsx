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
  const orderBy = useAppSelector(selectOrderBy);
  const { data: fetchFavorites, isSuccess: favoritesSuccess } =
    useGetFavoritesQuery({
      pageNumber,
      pageSize,
      orderBy,
    });

  useEffect(() => {
    if (!isLogin) {
      setIsButtonDisabled(true);
    }
  }, [isLogin]);

  const isFavorite =
    Array.isArray(fetchFavorites) && fetchFavorites.includes(articleId);

  const [
    isCurrentArticleAddedToFavorites,
    setIsCurrentArticleAddedToFavorites,
  ] = useState<boolean>(isFavorite);

  useEffect(() => {
    if (favoritesSuccess) {
      setIsCurrentArticleAddedToFavorites(
        Array.isArray(fetchFavorites) && fetchFavorites.includes(articleId)
      );
    }
  }, [articleId, fetchFavorites, favoritesSuccess]);

  console.log("test", isCurrentArticleAddedToFavorites);
  const { showNotification } = useNotification();
  const iconToShow = isCurrentArticleAddedToFavorites ? (
    <Bookmark />
  ) : (
    <BookmarkBorderIcon className="favoriteBorderIcon" />
  );

  const handleToggleLike = async () => {
    setIsButtonDisabled(true);
    if (isCurrentArticleAddedToFavorites) {
      try {
        await removeFromFavorites({ articleId }).unwrap();
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
        await addToFavorites({ articleId }).unwrap();
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
    <FavoriteButton
      disableRipple
      onClick={handleToggleLike}
      disabled={isButtonDisabled}
      endIcon={iconToShow}
      $isCurrentArticleAddedToFavorites={isCurrentArticleAddedToFavorites}
      $size={size}
    >
      <BookmarkBorderIcon className="favoriteFilledHoverIcon" />
    </FavoriteButton>
  );
};
