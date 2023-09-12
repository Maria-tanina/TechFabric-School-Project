import { StyledSidebarHeader } from "@components/SidebarHeader";
import { StyledSidebarCard } from "@components/SidebarCard";
import { useGetMyArticlesQuery } from "@services/articlesApi";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { getDate } from "@helpers/getDate";
import { StyledInfoIcons } from "./style";
import { defineDateOfLatestPublication } from "@helpers/defineDateOfLatestPublication";

export const ArticlesInfo = () => {
  const { data: articles = [] } = useGetMyArticlesQuery();

  const numberOfArticles = `Number of articles: ${articles.length}`;

  const latestDate = defineDateOfLatestPublication(articles);

  const dateOfLastArticle = articles.length
    ? `Date of the last article: ${getDate(latestDate.toString())}`
    : "No articles yet.";

  const totalCountOfLikes = articles.reduce(
    (acc, currentValue) => acc + currentValue.likeCount,
    0
  );

  const likes = `Likes: ${totalCountOfLikes}`;

  return (
    <StyledSidebarCard>
      <StyledSidebarHeader>
        Articles <span>Info</span>
      </StyledSidebarHeader>
      <List>
        <ListItemButton>
          <StyledInfoIcons>
            <NewspaperIcon />
          </StyledInfoIcons>
          <ListItemText primary={numberOfArticles} />
        </ListItemButton>
        <ListItemButton>
          <StyledInfoIcons>
            <CalendarMonthOutlinedIcon />
          </StyledInfoIcons>
          <ListItemText primary={dateOfLastArticle} />
        </ListItemButton>
        <ListItemButton>
          <StyledInfoIcons>
            <StarsOutlinedIcon />
          </StyledInfoIcons>
          <ListItemText primary={likes} />
        </ListItemButton>
      </List>
    </StyledSidebarCard>
  );
};
