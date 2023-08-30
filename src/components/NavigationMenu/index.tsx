import { logOut } from "@features/user/usersSlice";
import {
  MenuButton,
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
import { Role } from "@constants/roles";
import { useAppDispatch, useAppSelector } from "../../store";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemIcon } from "@mui/material";

const NavigationMenu = () => {
  const isLogin = useAppSelector((state) => state.users.isLogin);

  const userInfo = useAppSelector((state) => state.users.userInfo);

  const currentRole = userInfo?.userRole || Role.Guest;

  const dispatch = useAppDispatch();

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

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
          {isLogin && (
            <MenuItemStyle key="logout" onClick={handleLogOutClick}>
              <MenuButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Log out
              </MenuButton>
            </MenuItemStyle>
          )}
        </MenuList>
      </MenuWrap>
    </NavigateWrap>
  );
};

export default NavigationMenu;
