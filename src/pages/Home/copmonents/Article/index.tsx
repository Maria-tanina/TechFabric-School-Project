import CardMedia from "@mui/material/CardMedia";
import {
  StyledArticleCard,
  StyledAvatar,
  StyledCardContent,
  StyledCardHeader,
  StyledCardTitle,
  StyledIconButton,
  StyledTags,
  StyledTagsWrapper,
} from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FC } from "react";
import { IArticleProps } from "./types";
import { Link } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import { nanoid } from "@reduxjs/toolkit";

export const Article: FC<IArticleProps> = ({
  article
}) => {
  const {title, image, user, date, tags} = article;

  return (
    <article>
      <StyledArticleCard>
        <Link to={HOME_PATH}>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="Sport news"
          />
        </Link>

        <StyledCardContent>
          <StyledCardHeader
            avatar={
              <StyledAvatar>
                <Link to={HOME_PATH}>
                  {user.firstname.slice(0, 1)}
                </Link>
              </StyledAvatar>
            }
            title={
              <Link to={HOME_PATH}>
                {user.firstname + " " + user.lastname}
              </Link>
            }
            subheader={date}
          />

          <StyledCardTitle>
            <Link to={HOME_PATH}>
              {title}
            </Link>
          </StyledCardTitle>

          <StyledTagsWrapper>
            <StyledTags>
              {tags.map(tag =>
                <Link to={HOME_PATH} key={nanoid()}>
                  {tag}
                </Link>
              )}
            </StyledTags>
            <StyledTags>
              <span>Add to favorites</span>

              <StyledIconButton aria-label="like" disableRipple>
                <FavoriteBorderIcon className="favorite-border-icon" />

                <FavoriteIcon className="favorite-icon" />
              </StyledIconButton>
            </StyledTags>
          </StyledTagsWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </article>
  );
};

export default Article;
