import CardMedia from "@mui/material/CardMedia";
import {
  StyledArticleCard,
  StyledBottomWrapper,
  StyledCardContent,
  StyledCardTitle,
  StyledTagsWrapper,
} from "./style";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ARTICLE_PATH } from "@constants/paths";
import ProfileInfo from "@components/ProfileInfo";
import { IArticleProps } from "@customTypes/articleTypes";
import { getDate } from "@helpers/getDate";
import { ArticleTag } from "@components/ArticleTag";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";
import { LikeButton } from "@components/LikeButton";

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
                <ArticleTag key={tag} link="" tag={tag} />
              ))}
            </StyledTagsWrapper>

            {isLogin ? (
              <LikeButton articleId={article.id} showText={true} />
            ) : null}
          </StyledBottomWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </article>
  );
};

export default ArticleCard;
