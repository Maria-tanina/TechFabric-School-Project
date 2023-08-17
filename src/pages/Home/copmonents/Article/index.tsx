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

export const Article = () => {
  return (
    <StyledArticleCard sx={{ maxWidth: 940, borderRadius: "8px" }}>
      <CardMedia
        component="img"
        height="300"
        image="https://www.rankone.com/content/Images/hero-bg.jpg"
        alt="Sport news"
      />

      <StyledCardContent>
        <StyledCardHeader
          avatar={<StyledAvatar aria-label="sport">H</StyledAvatar>}
          title="User avatar"
          subheader="September 14, 2023"
        />

        <StyledCardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed sapien tempor, mollis est tempus, tincidunt enim.
        </StyledCardTitle>

        <StyledTagsWrapper>
          <StyledTags>
            <span>#car</span>
            <span>#blue</span>
            <span>#technique</span>
            <span>#mechanic</span>
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
