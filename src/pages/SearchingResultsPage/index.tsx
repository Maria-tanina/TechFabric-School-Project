import { LeftSidebar } from "@components/LeftSidebar";
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
import { SearchWrapper } from "@pages/SearchingResultsPage/style";
import { useNavigate, useParams } from "react-router-dom";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent, useEffect, useMemo } from "react";
import { setSearchPageNumber } from "@features/searchArticle/searchArticleSlice";
import {
  selectSearchBy,
  selectSearchOrderBy,
  selectSearchPageNumber,
  selectSearchPageSize,
} from "@features/searchArticle/searchArticleSelectors";
import { TableFetchError } from "@components/TableNotification";
import { SkeletonCard } from "@components/SkeletonCard";
import { SEARCH_PATH } from "@constants/paths";

export const SearchingResultsPage = () => {
  const { searchQuery = "" } = useParams<{
    searchQuery?: string | undefined;
  }>();

  const pageNumber = useAppSelector(selectSearchPageNumber);

  const pageSize = useAppSelector(selectSearchPageSize);

  const orderBy = useAppSelector(selectSearchOrderBy);

  const searchBy = useAppSelector(selectSearchBy);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${SEARCH_PATH}/${searchBy}/${encodeURIComponent(searchQuery)}`);
  }, []);

  const { data: articlesByTags, isFetching: articlesByTagsIsFetching } =
    useGetArticlesByTagsQuery(
      {
        substring: searchQuery,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "tags",
      }
    );

  const { data: articlesByTitle, isFetching: articlesByTitleIsFetching } =
    useGetArticlesByTitleQuery(
      {
        substring: searchQuery,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "articles",
      }
    );

  const { data: articlesByAuthor, isFetching: articlesByAuthorIsFetching } =
    useGetArticlesByAuthorQuery(
      {
        authorName: searchQuery,
        pageNumber,
        pageSize,
        orderBy,
      },
      {
        skip: searchBy !== "users",
      }
    );

  const articlesToShow = useMemo(() => {
    switch (searchBy) {
      case "tags":
        return articlesByTags;
      case "articles":
        return articlesByTitle;
      case "users":
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

  return (
    <SearchWrapper>
      <LeftSidebar>
        <SearchMenu searchQuery={searchQuery} />
      </LeftSidebar>
      <MainContent>
        <MainHeader>Search Results: {searchQuery}</MainHeader>
        <TabsMenu />
        {isFetching ? (
          <SkeletonCard />
        ) : !articlesTotalCount ? (
          <TableFetchError message="Articles not found!" />
        ) : (
          <>
            <ArticleList articles={articlesToShow?.articles} />
          </>
        )}
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
