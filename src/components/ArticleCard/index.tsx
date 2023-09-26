import { FC } from "react";
import CardMedia from "@mui/material/CardMedia";
import {
  FavoritesButtons,
  StyledArticleCard,
  StyledBottomWrapper,
  StyledCardContent,
  StyledCardTitle,
  StyledTagsWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { ARTICLE_PATH, SEARCH_PATH } from "@constants/paths";
import ProfileInfo from "@components/ProfileInfo";
import { IArticleProps } from "@customTypes/articleTypes";
import { getDate } from "@helpers/getDate";
import { ArticleTag } from "@components/ArticleTag";
import { useAppDispatch } from "../../store";
import { AddLikeButton } from "@components/LikeButton";
import { AddFavoriteButton } from "@components/FavoriteButton";
import { setValue } from "@features/searchArticle/searchArticleSlice";

export const ArticleCard: FC<IArticleProps> = ({ article }) => {
  const date = getDate(article.createdAt);
  const dispatch = useAppDispatch();
  const fullName = `${article.author.firstName} ${article.author.lastName}`;
  const handleAuthorClick = (user: string) => {
    dispatch(setValue(user));
  };

  return (
    <article>
      <StyledArticleCard>
        <Link to={`${ARTICLE_PATH}/${article.id}`}>
          <CardMedia
            component="img"
            height="300"
            image={article.image}
            alt="Sport news"
          />
        </Link>

        <StyledCardContent>
          <Link to={`${SEARCH_PATH}/users/${fullName}`}>
            <ProfileInfo
              userName={fullName}
              subtitle={date}
              onClick={() => handleAuthorClick(fullName)}
            />
          </Link>

          <StyledCardTitle>
            <Link to={`${ARTICLE_PATH}/${article.id}`}>{article.title}</Link>
          </StyledCardTitle>

          <StyledBottomWrapper>
            <StyledTagsWrapper>
              {article.tags.map((tag) => (
                <ArticleTag key={tag} tag={tag} />
              ))}
            </StyledTagsWrapper>
            <FavoritesButtons>
              <AddFavoriteButton
                articleId={article.id}
                showText={true}
                size={"32px"}
              />
              <AddLikeButton
                articleId={article.id}
                showText={true}
                size="32px"
              />
            </FavoritesButtons>
          </StyledBottomWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </article>
  );
};

export default ArticleCard;
