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
import { StyledInfoIcons } from "@pages/MyArticlesPage/components/ArticlesInfo/style";

export const ArticlesInfo = () => {
  const { data: articles = [] } = useGetMyArticlesQuery();

  const numberOfArticles = `Number of articles: ${articles?.length}`;

  const latestDate = new Date(
    Math.max(
      ...articles.map((article) => new Date(article.createdAt).getTime())
    )
  );

  const dateOfLastArticle = `Date of the last article: ${getDate(
    latestDate.toString()
  )}`;

  const totalCountOfLikes = `Likes: 100`;

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
          <ListItemText primary={totalCountOfLikes} />
        </ListItemButton>
      </List>
    </StyledSidebarCard>
  );
};
