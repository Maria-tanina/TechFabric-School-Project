import { MainContent } from "@components/MainContent";
import { MainHeader } from "@components/MainHeader";
import TabsMenu from "@components/TabsMenu";
import SearchMenu from "@components/SearchMenu";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  useGetArticlesByAuthorQuery,
  useGetArticlesByTagsQuery,
  useGetArticlesByTitleQuery,
} from "@services/articlesApi";
import ArticleList from "@components/ArticleList";
import { SearchLeftSidebar, SearchWrapper } from "./style";
import { useLocation, useParams } from "react-router-dom";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent, useEffect, useMemo } from "react";
import {
  setSearchPageNumber,
  TSearchBy,
} from "@features/searchArticle/searchArticleSlice";
import {
  selectSearchOrderBy,
  selectSearchPageNumber,
  selectSearchPageSize,
} from "@features/searchArticle/searchArticleSelectors";
import { TableStartSearch } from "@components/TableNotification";
import { SkeletonCard } from "@components/SkeletonCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { setSearchOrderBy } from "@features/searchArticle/searchArticleSlice";
import { TOrderByTypes } from "@services/types/articlesApiTypes";

export const SearchingResultsPage = () => {
  const { searchQuery: substring = "titles" } = useParams<{
    searchQuery?: TSearchBy | undefined;
  }>();

  const pageNumber = useAppSelector(selectSearchPageNumber);

  const pageSize = useAppSelector(selectSearchPageSize);

  const orderBy = useAppSelector(selectSearchOrderBy);

  const { pathname } = useLocation();

  const searchBy = pathname.split("/")[2];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchPageNumber(1));
  }, [substring, searchBy]);

  const { data: articlesByTags, isFetching: articlesByTagsIsFetching } =
    useGetArticlesByTagsQuery(
      {
        substring,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "tags" || !substring,
      }
    );

  const { data: articlesByTitle, isFetching: articlesByTitleIsFetching } =
    useGetArticlesByTitleQuery(
      {
        substring,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "titles" || !substring,
      }
    );

  const { data: articlesByAuthor, isFetching: articlesByAuthorIsFetching } =
    useGetArticlesByAuthorQuery(
      {
        authorName: substring,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "authors" || !substring,
      }
    );

  const articlesToShow = useMemo(() => {
    switch (searchBy) {
      case "tags":
        return articlesByTags;
      case "titles":
        return articlesByTitle;
      case "authors":
        return articlesByAuthor;
    }
  }, [articlesByAuthor, articlesByTags, articlesByTitle, searchBy]);

  const articlesTotalCount = articlesToShow?.totalCount || 0;

  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);

  const isFetching = useMemo(() => {
    return (
      articlesByTagsIsFetching ||
      articlesByTitleIsFetching ||
      articlesByAuthorIsFetching
    );
  }, [
    articlesByAuthorIsFetching,
    articlesByTagsIsFetching,
    articlesByTitleIsFetching,
  ]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setSearchPageNumber(value));
    window.scrollTo(0, 0);
  };

  const handleOrderChange = (filter: TOrderByTypes) =>
    dispatch(setSearchOrderBy(filter));

  return (
    <SearchWrapper>
      <SearchLeftSidebar>
        <SearchMenu />
      </SearchLeftSidebar>
      <MainContent>
        <MainHeader>Search Results: {substring}</MainHeader>
        {!!articlesTotalCount && (
          <TabsMenu orderBy={orderBy} handleOrderBy={handleOrderChange} />
        )}
        {isFetching ? <SkeletonCard /> : null}
        {!articlesTotalCount && !substring ? (
          <TableStartSearch
            message="Start your search!"
            icon={<SearchOutlinedIcon />}
          />
        ) : null}
        {!articlesTotalCount && substring && !isFetching ? (
          <TableStartSearch
            message="Articles not found!"
            icon={<ErrorOutlineIcon />}
          />
        ) : null}
        {!isFetching && articlesTotalCount ? (
          <ArticleList articles={articlesToShow?.articles} />
        ) : null}
        {!isFetching && !!articlesTotalCount && (
          <>
            <PaginationRounded
              count={pagesTotalCount}
              page={pageNumber}
              onChange={handlePageChange}
            />
          </>
        )}
      </MainContent>
    </SearchWrapper>
  );
};
