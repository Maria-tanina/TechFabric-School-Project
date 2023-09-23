import { StyledSidebarCard } from "@components/SidebarCard";
import { mockAuthors } from "../TopAuthors/mockAuthors";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { AuthorLabel } from "@components/AuthorLabel";

export const TopAuthors = () => {
  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Authors</span>
      </StyledSidebarHeader>
      {mockAuthors.map((author, i) => (
        <AuthorLabel
          key={i}
          firstName={author.firstname}
          lastName={author.lastname}
        />
      ))}
    </StyledSidebarCard>
  );
};
