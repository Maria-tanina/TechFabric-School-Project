import {
    ADMIN_USER_LIST_PATH,
    CONTACT_US_PATH,
    FAVORITES_PATH,
    HOME_PATH, RULES_PATH,
    TAGS_PATH,
} from "@constants/paths";
import {MenuItem} from "@components/NavigationMenu/types";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";


export const mainMenu: MenuItem[] = [
    {
        value: "Home Page",
        link: HOME_PATH,
        icon: <HomeOutlinedIcon/>,
    },
    {
        value: "Tags",
        link: TAGS_PATH,
        icon: <TagOutlinedIcon/>,
    },
    {
        value: "Favorites",
        link: FAVORITES_PATH,
        icon: <FavoriteBorderOutlinedIcon/>,
    },
];
export const adminMenu = [
    {
        value: "Users List",
        link: ADMIN_USER_LIST_PATH,
        icon: <FormatListBulletedIcon/>,
    },
];
export const otherMenu = [
    {
        value: "Contact with Us",
        link: CONTACT_US_PATH,
        icon: <EmailOutlinedIcon/>,
    },
    {
        value: "Rules",
        link: RULES_PATH,
        icon: <ArticleOutlinedIcon/>,
    },
];
