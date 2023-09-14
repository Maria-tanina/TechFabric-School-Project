import { logOut } from "@features/user/usersSlice";
import {
  MenuButton,
  MenuHeading,
  MenuItemStyle,
  MenuLink,
  MenuList,
  MenuWrap,
  NavWrapper,
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
import { selectIsLogin } from "@features/user/usersSelectors";
import { selectUserInfoData } from "@services/authSelectors";
import { useNotification } from "@hooks/useNotification";

const NavigationMenu = () => {
  const isLogin = useAppSelector(selectIsLogin);

  const userInfo = useAppSelector(selectUserInfoData);

  const currentRole = isLogin && userInfo ? userInfo?.userRole : Role.Guest;

  const dispatch = useAppDispatch();

  const { showNotification } = useNotification();

  const handleLogOutClick = () => {
    dispatch(logOut());
    showNotification("You are logged out", "success");
  };

  return (
    <NavWrapper>
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
    </NavWrapper>
  );
};

export default NavigationMenu;
