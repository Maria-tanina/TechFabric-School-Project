import {
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
import { useAppSelector } from "../../store";
import { ListItemIcon } from "@mui/material";
import { selectIsLogin } from "@features/user/usersSelectors";
import { selectUserInfoData } from "@services/authSelectors";

const NavigationMenu = () => {
  const isLogin = useAppSelector(selectIsLogin);

  const userInfo = useAppSelector(selectUserInfoData);

  const currentRole = isLogin && userInfo ? userInfo?.userRole : Role.Guest;

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
        </MenuList>
      </MenuWrap>
    </NavWrapper>
  );
};

export default NavigationMenu;
