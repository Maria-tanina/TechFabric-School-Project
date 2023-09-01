import React from "react";
import { Link } from "react-router-dom";
import {
  AuthorName,
  StyledTopAuthorAvatar,
  StyledTopAuthorName,
} from "@components/AuthorLabel/style";

interface IAuthorProps {
  firstName: string;
  lastName: string;
  link: string;
}

export const AuthorLabel: React.FC<IAuthorProps> = ({
  firstName,
  lastName,
  link,
}) => {
  return (
    <Link to={link}>
      <StyledTopAuthorName>
        <StyledTopAuthorAvatar aria-label="sport">
          {firstName.slice(0, 1)}
        </StyledTopAuthorAvatar>
        <div>
          <AuthorName>{firstName}</AuthorName>
          <AuthorName>{lastName}</AuthorName>
        </div>
      </StyledTopAuthorName>
    </Link>
  );
};
