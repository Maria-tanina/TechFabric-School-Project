import CardMedia from "@mui/material/CardMedia";
import {
  FavoriteWrapper,
  StyledArticleCard,
  StyledCardContent,
  StyledCardTitle,
  StyledTagsWrapper,
} from "./style";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ARTICLE_PATH } from "@constants/paths";
import { nanoid } from "@reduxjs/toolkit";
import ProfileInfo from "@components/ProfileInfo";
import { LikeButton } from "@components/LikeButton";
import { ArticleTag } from "@components/ArticleTag";
import { IArticleProps } from "@customTypes/article";

export const ArticleCard: FC<IArticleProps> = ({ article }) => {
  const { title, image, user, date, tags } = article;

  return (
    <article>
      <StyledArticleCard>
        <Link to={ARTICLE_PATH}>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="Sport news"
          />
        </Link>

        <StyledCardContent>
          <ProfileInfo
            userName={user.firstName + " " + user.lastName}
            subtitle={date}
          />

          <StyledCardTitle>
            <Link to={ARTICLE_PATH}>{title}</Link>
          </StyledCardTitle>
          <StyledTagsWrapper>
            {tags.map((tag) => (
              <ArticleTag tag={tag} link="/" key={nanoid()} />
            ))}
          </StyledTagsWrapper>
          <FavoriteWrapper>
            <span>Add to favorites</span>
            <LikeButton />
          </FavoriteWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </article>
  );
};

export default ArticleCard;
