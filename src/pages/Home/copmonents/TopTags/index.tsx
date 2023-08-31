import { mockTags } from "./mockTags";
import { StyledTag } from "./style";
import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import { nanoid } from "@reduxjs/toolkit";

export const TopTags = () => {
  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Tags</span>
      </StyledSidebarHeader>
      <div>
        {mockTags.map((tag) => (
          <StyledTag key={nanoid()}>
            <Link to={HOME_PATH}>{tag}</Link>
          </StyledTag>
        ))}
      </div>
    </StyledSidebarCard>
  );
};
