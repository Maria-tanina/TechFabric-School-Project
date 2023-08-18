import {
    MenuHeading,
    MenuItemStyle,
    MenuLink,
    MenuList,
    MenuWrap,
    NavigateWrap,
} from "@components/NavigationMenu/style";
import {
    adminMenu,
    mainMenu,
    otherMenu,
} from "@components/NavigationMenu/menuConfig";
import {ListItemIcon} from "@mui/material";


const NavigationMenu = ({isAdmin = true}) => {
    return (
        <NavigateWrap>
            <MenuList>
                {mainMenu.map((menuItem, index) => (
                    <MenuItemStyle key={index}>
                        <MenuLink to={menuItem.link}>
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            {menuItem.value}
                        </MenuLink>
                    </MenuItemStyle>
                ))}
            </MenuList>
            {isAdmin && (
                <MenuWrap>
                    <MenuHeading>Admin Menu</MenuHeading>
                    <MenuList>
                        {adminMenu.map((menuItem, index) => (
                            <MenuItemStyle key={index}>
                                <MenuLink to={menuItem.link}>
                                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                    {menuItem.value}
                                </MenuLink>
                            </MenuItemStyle>
                        ))}
                    </MenuList>
                </MenuWrap>
            )}
            <MenuWrap>
                <MenuHeading>Other</MenuHeading>
                <MenuList>
                    {otherMenu.map((menuItem, index) => (
                        <MenuItemStyle key={index}>
                            <MenuLink to={menuItem.link}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                {menuItem.value}
                            </MenuLink>
                        </MenuItemStyle>
                    ))}
                </MenuList>
            </MenuWrap>
        </NavigateWrap>
    );
};

export default NavigationMenu;
