import {
  MenuButton,
  MenuItemStyle,
  MenuList,
  MenuWrap,
  NavWrapper,
} from "@components/SearchMenu/style";
import { searchMenu } from "@components/SearchMenu/menuConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";

interface IActiveSearchType {
  activeSearchType: string;
  searchQuery: string;
}

const SearchMenu = ({ activeSearchType, searchQuery }: IActiveSearchType) => {
  const [activeItem, setActiveItem] = useState(activeSearchType);
  const navigate = useNavigate();
  const handleMenuItemClick = (menuItemValue: string) => {
    const lowerMenuItemValue = menuItemValue.toLowerCase();
    setActiveItem(lowerMenuItemValue);
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
                  menuItem.value.toLowerCase() === activeItem.toLowerCase()
                    ? "active"
                    : ""
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
