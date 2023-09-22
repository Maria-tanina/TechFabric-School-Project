import { GhostButton } from "@components/GhostButton";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper, StyledTab, TabsMenuWrapper } from "./style";
import { selectSportNames } from "@services/articlesSelectors";
import { selectSportType } from "@features/sort/sortSelectors";
import { SelectChangeEvent } from "@mui/material";
import { setType } from "@features/sort/sortSlice";
import { setOrderBy } from "@features/article/articleSlice";
import { selectOrderBy } from "@features/article/articleSelectors";
import { useAppDispatch, useAppSelector } from "../../store";
import { SportTypes } from "@services/types/articlesApiTypes";

const TabsMenu = () => {
  const types = useAppSelector(selectSportNames);

  const orderBy = useAppSelector(selectOrderBy);

  const type = useAppSelector(selectSportType);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setType(e.target.value as keyof typeof SportTypes));
  };

  return (
    <TabsMenuWrapper>
      <FilterTabsWrapper>
        {filterTabs.map((filter, i) => (
          <GhostButton
            $width="120px"
            key={i}
            onClick={() => dispatch(setOrderBy(filter.orderBy))}
          >
            <StyledTab $isActive={filter.orderBy === orderBy}>
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
