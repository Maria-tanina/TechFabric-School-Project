import { GhostButton } from "@components/GhostButton";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper, StyledTab, TabsMenuWrapper } from "./style";
import { selectSportNames } from "@services/articlesSelectors";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectSortType } from "@features/sort/sortSelectors";
import { SelectChangeEvent } from "@mui/material";
import { setType } from "@features/sort/sortSlice";
import { setOrderBy } from "@features/article/articleSlice";
import { selectOrderBy } from "@features/article/articleSelectors";

const TabsMenu = () => {
  const types = useAppSelector(selectSportNames);

  const orderBy = useAppSelector(selectOrderBy);

  const type = useAppSelector(selectSortType);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setType(e.target.value as string));
  };

  return (
    <TabsMenuWrapper>
      <FilterTabsWrapper>
        {filterTabs.map((filter, i) => (
          <GhostButton
            $width="110px"
            key={i}
            onClick={() => dispatch(setOrderBy(filter.orderBy))}
          >
            <StyledTab isActive={filter.orderBy === orderBy}>
              {filter.value}
            </StyledTab>
          </GhostButton>
        ))}
      </FilterTabsWrapper>

      <GhostSelect
        options={types || []}
        value={type}
        onChange={handleTypeChange}
        label="Sort by type"
      />
    </TabsMenuWrapper>
  );
};

export default TabsMenu;
