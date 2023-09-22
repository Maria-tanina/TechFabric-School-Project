import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { useGetTopTagsQuery } from "@services/topsApi";
import { TOP_TAGS_COUNT } from "@constants/tops";
import { Link } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch } from "../../../../store";
import { useState } from "react";
import { setValue } from "@features/searchArticle/searchArticleSlice";

export const TopTags = () => {
  const { data, isError } = useGetTopTagsQuery();
  const dispatch = useAppDispatch();
  const [selectedTag, setSelectedTag] = useState("");
  const topTags: string[] = (data || [])
    .slice(0, TOP_TAGS_COUNT)
    .map((item) => item.tagName);
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
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
