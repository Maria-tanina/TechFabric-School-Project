import { GhostButton } from "@components/GhostButton";
import { NavLink } from "react-router-dom";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper, TabsMenuWrapper } from "./style";
import {
  selectSportTypesData,
  selectSportTypesIsLoading,
} from "@services/articlesSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectSortType } from "@features/sort/sortSelectors";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import { setType } from "@features/sort/sortSlice";

const TabsMenu = () => {
  const types = useAppSelector(selectSportTypesData);

  const type = useAppSelector(selectSortType);

  const isLoading = useAppSelector(selectSportTypesIsLoading);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setType(e.target.value as string));
  };

  return (
    <TabsMenuWrapper>
      <FilterTabsWrapper>
        {filterTabs.map((filter, i) => (
          <GhostButton $width="110px" key={i}>
            <NavLink
              to={filter.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? 800 : 500,
                };
              }}
            >
              {filter.value}
            </NavLink>
          </GhostButton>
        ))}
      </FilterTabsWrapper>

      <GhostSelect
        options={types || []}
        value={type}
        onChange={handleTypeChange}
        label="Sort by type"
        endAdornment={
          <>
            {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
          </>
        }
      />
    </TabsMenuWrapper>
  );
};

export default TabsMenu;
