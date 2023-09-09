import { mockTags } from "./mockTags";
import { StyledTag, TagsWrapper } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";

export const TopTags = () => {
  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <TagsWrapper>
        {mockTags.map((tag, i) => (
          <StyledTag key={i}>
            <Link to={HOME_PATH}>{tag}</Link>
          </StyledTag>
        ))}
      </TagsWrapper>
    </StyledSidebarCard>
  );
};
