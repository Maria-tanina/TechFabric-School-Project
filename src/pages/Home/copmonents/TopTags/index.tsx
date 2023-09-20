import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import { useGetTopTagsQuery } from "@services/topsApi";
import { TOP_TAGS_COUNT } from "@constants/tops";

export const TopTags = () => {
  const { data, isError } = useGetTopTagsQuery();
  const topTags: string[] = (data || [])
    .slice(0, TOP_TAGS_COUNT)
    .map((item) => item.tagName);

  return !isError ? (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <TagsWrapper>
        {topTags?.map((tag, i) => (
          <StyledTag key={i}>
            <Link to={HOME_PATH}>{tag}</Link>
          </StyledTag>
        ))}
      </TagsWrapper>
    </StyledSidebarCard>
  ) : null;
};
