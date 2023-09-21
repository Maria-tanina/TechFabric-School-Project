import CardMedia from "@mui/material/CardMedia";
import {
  FavoritesButtons,
  StyledArticleCard,
  StyledBottomWrapper,
  StyledCardContent,
  StyledCardTitle,
  StyledTagsWrapper,
} from "./style";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ARTICLE_PATH, SEARCH_PATH } from "@constants/paths";
import ProfileInfo from "@components/ProfileInfo";
import { IArticleProps } from "@customTypes/articleTypes";
import { getDate } from "@helpers/getDate";
import { ArticleTag } from "@components/ArticleTag";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";
import { AddLikeButton } from "@components/LikeButton";
import { AddFavoriteButton } from "@components/FavoriteButton";

export const ArticleCard: FC<IArticleProps> = ({ article }) => {
  const date = getDate(article.createdAt);

  const isLogin = useAppSelector(selectIsLogin);

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
          <ProfileInfo
            userName={article.author.firstName + " " + article.author.lastName}
            subtitle={date}
          />

          <StyledCardTitle>
            <Link to={`${ARTICLE_PATH}/${article.id}`}>{article.title}</Link>
          </StyledCardTitle>

          <StyledBottomWrapper>
            <StyledTagsWrapper>
              {article.tags.map((tag) => (
                <ArticleTag
                  key={tag}
                  link={`${SEARCH_PATH}/tags/${encodeURIComponent(tag)}`}
                  tag={tag}
                />
              ))}
            </StyledTagsWrapper>

            {isLogin ? (
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
            ) : null}
          </StyledBottomWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </article>
  );
};

export default ArticleCard;
