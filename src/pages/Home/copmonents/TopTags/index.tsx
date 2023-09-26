import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { TOP_TAGS_COUNT } from "@constants/tops";
import { Link } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { setValue } from "@features/searchArticle/searchArticleSlice";
import { selectTags, selectTagsError } from "@features/tags/tagsSelectors";

export const TopTags = () => {
  const tags = useAppSelector((state) =>
    selectTags(state, {
      pageSize: 7,
      pageNumber: 1,
    })
  );
  const isError = useAppSelector((state) =>
    selectTagsError(state, {
      pageSize: 7,
      pageNumber: 1,
    })
  );
  const dispatch = useAppDispatch();
  const topTags: string[] = (tags ? tags.map((tag) => tag.tagName) : []).slice(
    0,
    TOP_TAGS_COUNT
  );

  const handleTagClick = (tag: string) => {
    dispatch(setValue(tag));
  };

  return !isError ? (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <TagsWrapper>
        {topTags?.map((tag) => (
          <StyledTag key={tag}>
            <Link
              to={`${SEARCH_PATH}/tags/${encodeURIComponent(tag)}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Link>
          </StyledTag>
        ))}
      </TagsWrapper>
    </StyledSidebarCard>
  ) : null;
};
