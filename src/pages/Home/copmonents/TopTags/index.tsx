import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { useGetTopTagsQuery } from "@services/topsApi";
import { TOP_TAGS_COUNT } from "@constants/tops";
import { Link } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch } from "../../../../store";
import { setAllTags } from "@features/tags/tagsSlice";
import { useEffect } from "react";

export const TopTags = () => {
  const { data, isError } = useGetTopTagsQuery();
  const dispatch = useAppDispatch();
  const topTags: string[] = (data || [])
    .slice(0, TOP_TAGS_COUNT)
    .map((item) => item.tagName);
  useEffect(() => {
    if (data) {
      dispatch(setAllTags(data));
    }
  }, [data]);

  return !isError ? (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <TagsWrapper>
        {topTags?.map((tag, i) => (
          <StyledTag key={i}>
            <Link to={`${SEARCH_PATH}/tags/${encodeURIComponent(tag)}`}>
              {tag}
            </Link>
          </StyledTag>
        ))}
      </TagsWrapper>
    </StyledSidebarCard>
  ) : null;
};
