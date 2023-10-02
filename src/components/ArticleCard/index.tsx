import { FC, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../store";
import { AddLikeButton } from "@components/LikeButton";
import { AddFavoriteButton } from "@components/FavoriteButton";
import { setValue } from "@features/searchArticle/searchArticleSlice";
import {
  selectFavoritesPostIds,
  selectLikedPostIds,
} from "@services/favoritesSelectors";
import { selectIsLogin } from "@features/user/usersSelectors";

export const ArticleCard: FC<IArticleProps> = ({ article }) => {
  const isLogin = useAppSelector(selectIsLogin);
  const date = getDate(article.createdAt);
  const dispatch = useAppDispatch();
  const fullName = `${article.author.firstName} ${article.author.lastName}`;
  const handleAuthorClick = (user: string) => {
    dispatch(setValue(user));
  };
  const [isButtonsStates, setIsButtonsStates] = useState({
    isLiked: false,
    isFavorites: false,
  });
  const likedPostsId = useAppSelector(selectLikedPostIds);
  const favoritesPostsId = useAppSelector(selectFavoritesPostIds);

  useEffect(() => {
    setIsButtonsStates({
      isLiked:
        Array.isArray(likedPostsId) && likedPostsId?.includes(article?.id),
      isFavorites:
        Array.isArray(favoritesPostsId) &&
        favoritesPostsId?.includes(article?.id),
    });
  }, [likedPostsId?.length, favoritesPostsId?.length]);

  useEffect(() => {
    if (!isLogin) {
      setIsButtonsStates({
        isLiked: false,
        isFavorites: false,
      });
    }
  }, [!isLogin]);
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
          <Link to={`${SEARCH_PATH}/authors/${fullName}`}>
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
