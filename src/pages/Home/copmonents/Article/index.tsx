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

export const Article: FC<IArticleProps> = ({
  article
}) => {
  const {title, image, user, date, tags} = article;

  return (
    <StyledArticleCard>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Sport news"
      />

      <StyledCardContent>
        <StyledCardHeader
          avatar={<StyledAvatar aria-label="sport">{user.name}</StyledAvatar>}
          title="User avatar"
          subheader={date}
        />

        <StyledCardTitle>
          {title}
        </StyledCardTitle>

        <StyledTagsWrapper>
          <StyledTags>
            {tags.map(tag => <span>{tag}</span>)}
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
  );
};

export default Article;
