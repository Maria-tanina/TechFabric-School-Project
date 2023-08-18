import { mockTags } from "./mockTags";
import { StyledTag } from "./style";
import { StyledSidebarCard } from "../SidebarCard";
import { StyledSidebarHeader } from "../SidebarHeader";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";

export const TopTags = () => {
  return(
    <StyledSidebarCard>
      <StyledSidebarHeader>Top <span>Tags</span></StyledSidebarHeader>
      {mockTags.map((tag, i) =>
          <StyledTag key={i}>
            <Link to={HOME_PATH}>
              {tag}
            </Link>
          </StyledTag>
       )}
    </StyledSidebarCard>
  )
}