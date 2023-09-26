import { StyledSidebarCard } from "@components/SidebarCard";
import { StyledSidebarHeader } from "@components/SidebarHeader";
import { AuthorLabel } from "@components/AuthorLabel";
import { useAppSelector } from "../../../../store";
import {
  selectTopAuthors,
  selectTopAuthorsError,
} from "@features/authors/authorsSelectors";

export const TopAuthors = () => {
  const authors = useAppSelector((state) =>
    selectTopAuthors(state, {
      pageSize: 3,
      pageNumber: 1,
    })
  );

  const isError = useAppSelector((state) =>
    selectTopAuthorsError(state, {
      pageSize: 3,
      pageNumber: 1,
    })
  );

  return !isError ? (
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
  ) : null;
};
