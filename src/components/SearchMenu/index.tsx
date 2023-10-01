import {
  MenuButton,
  MenuItemStyle,
  MenuList,
  MenuWrap,
  NavWrapper,
} from "@components/SearchMenu/style";
import { searchMenu } from "@components/SearchMenu/menuConfig";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";

const SearchMenu = () => {
  const { searchQuery = "" } = useParams<{
    searchQuery?: string | undefined;
  }>();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const searchBy = pathname.split("/")[2];

  const handleMenuItemClick = (menuItemValue: string) => {
    const lowerMenuItemValue = menuItemValue.toLowerCase();
    navigate(
      `${SEARCH_PATH}/${lowerMenuItemValue}/${encodeURIComponent(searchQuery)}`
    );
  };

  return (
    <NavWrapper>
      <MenuWrap>
        <MenuList>
          {searchMenu.map((menuItem, index) => (
            <MenuItemStyle key={index}>
              <MenuButton
                className={
                  menuItem.value.toLowerCase() === searchBy ? "active" : ""
                }
                onClick={() => handleMenuItemClick(menuItem.value)}
              >
                {menuItem.value}
              </MenuButton>
            </MenuItemStyle>
          ))}
        </MenuList>
      </MenuWrap>
    </NavWrapper>
  );
};

export default SearchMenu;
