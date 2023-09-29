import { FC } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { getDate } from "@helpers/getDate";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { IArticleProps } from "@customTypes/articleTypes";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  StyledCard,
  StyledCardContent,
  StyledMetaData,
  StyledDescription,
  StyledLink,
  StyledLinksWrapper,
  StyledTitle,
  StyledCardDataBox,
  StyledCardActionArea,
} from "./style";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { UPDATE_ARTICLE_PATH } from "@constants/paths";
import { sliceString } from "@helpers/sliceString";
import { useDispatch } from "react-redux";
import { setShowPreview } from "@features/article/articleSlice";

interface SmallArticleCardProps extends IArticleProps {
  link: string;
  reviewMode: boolean;
}

export const SmallArticleCard: FC<SmallArticleCardProps> = ({
  article,
  link,
  reviewMode,
}) => {
  const { title, description, createdAt, status, id } = article;
  const formattedTitle = sliceString(title, 70);
  const formattedDescription = sliceString(description, 200);
  const isPublished = article.status === "Published";
  const dispatch = useDispatch();

  const onEditClick = () => {
    dispatch(setShowPreview(false));
  };

  return (
    <Grid item key={title} sm={6} md={6} lg={6} xl={4}>
      <StyledCard>
        <StyledCardActionArea>
          <Link to={link}>
            <CardMedia
              component="img"
              height="140"
              image={article.image}
              alt="sport"
            />
          </Link>
          <StyledCardContent>
            <StyledCardDataBox>
              <StyledMetaData>
                <AccessTimeOutlinedIcon fontSize="small" />
                {getDate(createdAt)}
              </StyledMetaData>
              <StyledMetaData>{status}</StyledMetaData>
            </StyledCardDataBox>
            <StyledTitle gutterBottom variant="h5">
              <Link to={link}>{formattedTitle}</Link>
            </StyledTitle>
            <StyledDescription>
              <Link to={link}>{formattedDescription}</Link>
            </StyledDescription>
            <StyledLinksWrapper>
              {reviewMode ? (
                <StyledLink to={link}>
                  Show preview
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                </StyledLink>
              ) : (
                <>
                  <StyledLink to={link}>
                    READ MORE
                    <EastOutlinedIcon fontSize="small" />
                  </StyledLink>
                  {!isPublished && (
                    <StyledLink
                      to={`${UPDATE_ARTICLE_PATH}/${id}`}
                      onClick={onEditClick}
                    >
                      Edit
                      <EditOutlinedIcon fontSize="small" />
                    </StyledLink>
                  )}
                </>
              )}
            </StyledLinksWrapper>
          </StyledCardContent>
        </StyledCardActionArea>
      </StyledCard>
    </Grid>
  );
};
