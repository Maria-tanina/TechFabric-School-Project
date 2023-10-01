import React from "react";
import { Link } from "react-router-dom";
import {
  AuthorName,
  StyledTopAuthorAvatar,
  StyledTopAuthorName,
} from "@components/AuthorLabel/style";
import { useAppDispatch } from "../../store";
import { setValue } from "@features/searchArticle/searchArticleSlice";
import { SEARCH_PATH } from "@constants/paths";

interface IAuthorProps {
  firstName: string;
  lastName: string;
}

export const AuthorLabel: React.FC<IAuthorProps> = ({
  firstName,
  lastName,
}) => {
  const dispatch = useAppDispatch();

  const handleAuthorClick = (user: string) => {
    dispatch(setValue(user));
  };

  return (
    <Link
      to={`${SEARCH_PATH}/authors/${firstName} ${lastName}`}
      onClick={() => handleAuthorClick(`${firstName} ${lastName}`)}
    >
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
