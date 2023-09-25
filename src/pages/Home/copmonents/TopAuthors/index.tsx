import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { AuthorLabel } from "@components/AuthorLabel";
import { useAppSelector } from "../../../../store";
import { selectTopAuthorsData } from "@features/authors/authorsSelectors";

export const TopAuthors = () => {
  const authors = useAppSelector(selectTopAuthorsData);

  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Top <span>Authors</span>
      </StyledSidebarHeader>
      {authors.map((author) => (
        <AuthorLabel
          key={author.authorId}
          firstName={author.firstName}
          lastName={author.lastName}
        />
      ))}
    </StyledSidebarCard>
  );
};
