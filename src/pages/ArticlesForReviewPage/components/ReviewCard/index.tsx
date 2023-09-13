import { FC } from "react";
import { IArticleProps } from "@customTypes/articleTypes";
import { sliceString } from "@helpers/sliceString";
import { CardActionArea, Grid } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  StyledCardDataBox,
  StyledDescription,
  StyledLinksWrapper,
  StyledMetaData,
  StyledTitle,
} from "@components/SmallArticleCard/style";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { getDate } from "@helpers/getDate";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { StyledBottomText } from "@pages/ArticlesForReviewPage/components/ReviewCard/style";
import { useNavigate } from "react-router-dom";
import { CREATE_POST_PATH } from "@constants/paths";
import { setArticlePreview } from "@features/article/articleSlice";
import { useAppDispatch } from "../../../../store";

export const ReviewCard: FC<IArticleProps> = ({ article }) => {
  const { title, description, createdAt, status } = article;

  const formattedTitle = sliceString(title, 40);

  const formattedDescription = sliceString(description, 100);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    dispatch(setArticlePreview(article));
    navigate(CREATE_POST_PATH);
  };

  return (
    <Grid item key={title} sm={6} md={6} lg={6} xl={4}>
      <StyledCard onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={article.image}
            alt="sport"
          />
          <StyledCardContent>
            <StyledCardDataBox>
              <StyledMetaData>
                <AccessTimeOutlinedIcon fontSize="small" />
                {getDate(createdAt)}
              </StyledMetaData>
              <StyledMetaData>{status}</StyledMetaData>
            </StyledCardDataBox>
            <StyledTitle gutterBottom variant="h5">
              {formattedTitle}
            </StyledTitle>
            <StyledDescription>{formattedDescription}</StyledDescription>
            <StyledLinksWrapper>
              <StyledBottomText>
                Show preview
                <EditOutlinedIcon fontSize="small" />
              </StyledBottomText>
            </StyledLinksWrapper>
          </StyledCardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};
