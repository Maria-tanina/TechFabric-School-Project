import {
  MenuButton,
  MenuItemStyle,
  MenuList,
  MenuWrap,
  NavWrapper,
} from "@components/SearchMenu/style";
import { searchMenu } from "@components/SearchMenu/menuConfig";
import { useNavigate } from "react-router-dom";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setSearchBy,
  TSearchBy,
} from "@features/searchArticle/searchArticleSlice";
import { selectSearchBy } from "@features/searchArticle/searchArticleSelectors";

interface IActiveSearchType {
  searchQuery: string;
}

const SearchMenu = ({ searchQuery }: IActiveSearchType) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const searchBy = useAppSelector(selectSearchBy);

  const handleMenuItemClick = (menuItemValue: string) => {
    const lowerMenuItemValue = menuItemValue.toLowerCase();
    dispatch(setSearchBy(lowerMenuItemValue as TSearchBy));
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
