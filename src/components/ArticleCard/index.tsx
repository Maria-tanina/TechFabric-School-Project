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
import ProfileInfo from "@components/ProfileInfo";
import { LikeButton } from "@components/LikeButton";
import { IArticleProps } from "@customTypes/articleTypes";
import { getDate } from "@helpers/getDate";
import { ArticleTag } from "@components/ArticleTag";

export const ArticleCard: FC<IArticleProps> = ({ article }) => {
  const date = getDate(article.createdAt);

  return (
    <article>
      <StyledArticleCard>
        <Link to={`${ARTICLE_PATH}/${article.id}`}>
          <CardMedia
            component="img"
            height="300"
            image="https://www.rankone.com/content/Images/hero-bg.jpg"
            alt="Sport news"
          />
        </Link>

        <StyledCardContent>
          <ProfileInfo
            userName={article.author.firstName + " " + article.author.lastName}
            subtitle={date}
          />
          <StyledCardTitle>
            <Link to={`${ARTICLE_PATH}/${article.id}`}>{article.title}</Link>
          </StyledCardTitle>
          <StyledTagsWrapper>
            {article.tags.map((tag) => (
              <ArticleTag key={tag} link="" tag={tag} />
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
