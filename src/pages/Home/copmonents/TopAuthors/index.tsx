import { StyledSidebarCard } from "../SidebarCard";
import { mockAuthors } from "../TopAuthors/mockAuthors";
import { StyledTopAuthorAvatar, StyledTopAuthorName } from "./style";
import { StyledSidebarHeader } from "../SidebarHeader";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import { nanoid } from "@reduxjs/toolkit";

export const TopAuthors = () => {
  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Authors</span>
      </StyledSidebarHeader>

      {mockAuthors.map((author) => (
        <StyledTopAuthorName
          key={nanoid()}
          avatar={
            <StyledTopAuthorAvatar aria-label="sport">
              <Link to={HOME_PATH}>{author.firstname.slice(0, 1)}</Link>
            </StyledTopAuthorAvatar>
          }
          title={<Link to={HOME_PATH}>{author.firstname}</Link>}
          subheader={<Link to={HOME_PATH}>{author.lastname}</Link>}
        />
      ))}
    </StyledSidebarCard>
  );
};
