import {
  ADMIN_USER_LIST_PATH,
  ARTICLES_FOR_REVIEW_PATH,
  CONTACT_US_PATH,
  FAVORITES_PATH,
  HOME_PATH,
  MY_ARTICLES_PATH,
  RULES_PATH,
  TAGS_PATH,
} from "@constants/paths";
import { IMenuItem } from "@components/NavigationMenu/types";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Role } from "@constants/roles";

const allRoles = [Role.Guest, Role.User, Role.Author, Role.SuperAdmin];

export const mainMenu: IMenuItem[] = [
  {
    value: "Home Page",
    link: HOME_PATH,
    icon: <HomeOutlinedIcon />,
    access: allRoles,
  },
  {
    value: "Tags",
    link: TAGS_PATH,
    icon: <TagOutlinedIcon />,
    access: allRoles,
  },
  {
    value: "Favorites",
    link: FAVORITES_PATH,
    icon: <BookmarkBorderIcon />,
    access: [Role.User, Role.Author, Role.SuperAdmin],
  },
  {
    value: "My articles",
    link: MY_ARTICLES_PATH,
    icon: <ArticleOutlinedIcon />,
    access: [Role.Author],
  },
];
export const adminMenu: IMenuItem[] = [
  {
    value: "Users List",
    link: ADMIN_USER_LIST_PATH,
    icon: <FormatListBulletedIcon />,
    access: [Role.SuperAdmin],
  },
  {
    value: "Articles for review",
    link: ARTICLES_FOR_REVIEW_PATH,
    icon: <GradingOutlinedIcon />,
    access: [Role.SuperAdmin],
  },
];
export const otherMenu: IMenuItem[] = [
  {
    value: "Contact with Us",
    link: CONTACT_US_PATH,
    icon: <EmailOutlinedIcon />,
    access: allRoles,
  },
  {
    value: "Rules",
    link: RULES_PATH,
    icon: <ArticleOutlinedIcon />,
    access: allRoles,
  },
];
