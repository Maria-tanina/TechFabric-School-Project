import NavigationMenu from "@components/NavigationMenu";
import { LeftSidebar } from "@components/LeftSidebar";
import { MainContent } from "@components/MainContent";
import ArticleList from "@components/ArticleList";
import { MainHeader } from "@components/MainHeader";
import { useGetFavoritesArticlesQuery } from "@services/favoritesApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { LinearProgress } from "@mui/material";
import {
  selectFavoriteOrderBy,
  selectFavoritePageNumber,
  selectFavoritePageSize,
} from "@features/favoritesArticle/favoritesArticleSelectors";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent, useEffect } from "react";
import { setFavoritePageNumber } from "@features/favoritesArticle/favoritesArticleSlice";
import { useNotification } from "@hooks/useNotification";
import { HOME_PATH } from "@constants/paths";
import { useNavigate } from "react-router-dom";
import { TableFetchError } from "@components/TableNotification";

export const FavoritesArticlePage = () => {
  const pageNumber = useAppSelector(selectFavoritePageNumber);
  const pageSize = useAppSelector(selectFavoritePageSize);
  const orderBy = useAppSelector(selectFavoriteOrderBy);
  const {
    data: favoritesData,
    isError,
    isFetching,
  } = useGetFavoritesArticlesQuery({
    pageNumber,
    pageSize,
    orderBy,
  });
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const articlesTotalCount = favoritesData?.totalCount || 0;
  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);
  const dispatch = useAppDispatch();

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setFavoritePageNumber(value));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isError) {
      navigate(HOME_PATH);
      showNotification("Something wrong. Article not found!", "error");
    }
  }, [isError]);

  return (
    <>
      <LeftSidebar>
        <NavigationMenu />
      </LeftSidebar>
      <MainContent>
        <MainHeader>Favorite Articles</MainHeader>
        {!articlesTotalCount ? (
          <TableFetchError message="Articles not found!" />
        ) : (
          <>
            {isFetching && <LinearProgress />}
            <ArticleList articles={favoritesData?.articles} />
            {!isFetching && (
              <PaginationRounded
                count={pagesTotalCount}
                page={pageNumber}
                onChange={handlePageChange}
              />
            )}
          </>
        )}
      </MainContent>
    </>
  );
};
