import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { TOP_TAGS_COUNT } from "@constants/tops";
import { Link } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectTags, selectTagsIsError } from "@features/tags/tagsSelectors";
import { setValue } from "@features/searchArticle/searchArticleSlice";

export const TopTags = () => {
  const isError = useAppSelector(selectTagsIsError);
  const tags = useAppSelector(selectTags);
  const dispatch = useAppDispatch();
  const topTags: string[] = (tags || []).slice(0, TOP_TAGS_COUNT);
  const handleTagClick = (tag: string) => {
    dispatch(setValue(tag));
  };

  return !isError ? (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <TagsWrapper>
        {topTags?.map((tag, i) => (
          <StyledTag key={i}>
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
