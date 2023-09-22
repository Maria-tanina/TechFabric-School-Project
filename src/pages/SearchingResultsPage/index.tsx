import { LeftSidebar } from "@components/LeftSidebar";
import { MainContent } from "@components/MainContent";
import { MainHeader } from "@components/MainHeader";
import TabsMenu from "@components/TabsMenu";
import SearchMenu from "@components/SearchMenu";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetArticlesByTagsQuery } from "@services/articlesApi";
import ArticleList from "@components/ArticleList";
import { SearchWrapper } from "@pages/SearchingResultsPage/style";
import { useLocation, useParams } from "react-router-dom";
import { PaginationRounded } from "@components/PaginationRounded";
import { ChangeEvent } from "react";
import { setSearchPageNumber } from "@features/searchArticle/searchArticleSlice";
import {
  selectSearchOrderBy,
  selectSearchPageNumber,
  selectSearchPageSize,
} from "@features/searchArticle/searchArticleSelectors";
import { FullHeightSpinner } from "@components/Spinner";

export const SearchingResultsPage = () => {
  const { searchQuery = "" } = useParams<{
    searchQuery?: string | undefined;
  }>();
  const { pathname } = useLocation();
  const searchAbout = pathname.split("/")[2];
  const pageNumber = useAppSelector(selectSearchPageNumber);
  const pageSize = useAppSelector(selectSearchPageSize);
  const orderBy = useAppSelector(selectSearchOrderBy);
  const { data: articlesTags, isFetching: tagsIsFetching } =
    useGetArticlesByTagsQuery({
      substring: searchQuery,
      pageNumber,
      pageSize,
      orderBy,
    });
  const articlesTotalCount = articlesTags?.totalCount || 0;
  const pagesTotalCount = Math.ceil(articlesTotalCount / pageSize);
  const dispatch = useAppDispatch();
  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setSearchPageNumber(value));
    window.scrollTo(0, 0);
  };

  return (
    <SearchWrapper>
      <LeftSidebar>
        <SearchMenu activeSearchType={searchAbout} searchQuery={searchQuery} />
      </LeftSidebar>
      <MainContent>
        {tagsIsFetching ? (
          <FullHeightSpinner size={110} />
        ) : (
          <>
            <TabsMenu />
            <MainHeader>Search Results: {searchQuery}</MainHeader>
            <ArticleList articles={articlesTags?.articles} />
            {!tagsIsFetching && (
              <PaginationRounded
                count={pagesTotalCount}
                page={pageNumber}
                onChange={handlePageChange}
              />
            )}
          </>
        )}
      </MainContent>
    </SearchWrapper>
  );
};
