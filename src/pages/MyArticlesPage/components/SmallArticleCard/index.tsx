import { FC } from "react";
import { Link } from "react-router-dom";
import { CardActionArea, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { getDate } from "@helpers/getDate";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { IArticleProps } from "@customTypes/articleTypes";
import {
  StyledCard,
  StyledCardContent,
  StyledDate,
  StyledDescription,
  StyledLink,
  StyledLinksWrapper,
  StyledTitle,
} from "./style";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { ARTICLE_PATH } from "@constants/paths";

export const SmallArticleCard: FC<IArticleProps> = ({ article }) => {
  const { title, description, createdAt } = article;

  const formattedTitle =
    title.length > 40 ? `${title.slice(0, 100)}...` : title;

  const formattedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <Grid item key={title} sm={6} md={6} lg={6} xl={4}>
      <StyledCard>
        <CardActionArea>
          <Link to={ARTICLE_PATH}>
            <CardMedia
              component="img"
              height="140"
              image="https://st4.depositphotos.com/1005563/19666/i/450/depositphotos_196668956-stock-photo-balls-sport-trophy-championship-concept.jpg"
              alt="sport"
            />
          </Link>
          <StyledCardContent>
            <StyledDate>
              <AccessTimeOutlinedIcon fontSize="small" />
              {getDate(createdAt)}
            </StyledDate>
            <StyledTitle gutterBottom variant="h5">
              <Link to={ARTICLE_PATH}>{formattedTitle}</Link>
            </StyledTitle>
            <StyledDescription>
              <Link to={ARTICLE_PATH}>{formattedDescription}</Link>
            </StyledDescription>
            <StyledLinksWrapper>
              <StyledLink to={ARTICLE_PATH}>
                READ MORE
                <EastOutlinedIcon fontSize="small" />
              </StyledLink>
              <StyledLink to="/">
                Edit
                <EditOutlinedIcon fontSize="small" />
              </StyledLink>
            </StyledLinksWrapper>
          </StyledCardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};
