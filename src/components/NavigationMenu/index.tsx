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
import { ListItemIcon } from "@mui/material";
import { Role } from "@constants/roles";
import { useAppSelector } from "../../store";

const NavigationMenu = () => {
  const userInfo = useAppSelector((state) => state.users.userInfo);

  const currentRole = userInfo?.userRole || Role.Guest;

  return (
    <NavigateWrap>
      <MenuList>
        {mainMenu.map(
          (menuItem, index) =>
            menuItem.access.find((item) => item === currentRole) && (
              <MenuItemStyle key={index}>
                <MenuLink to={menuItem.link}>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  {menuItem.value}
                </MenuLink>
              </MenuItemStyle>
            )
        )}
      </MenuList>
      {currentRole === Role.SuperAdmin && (
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
