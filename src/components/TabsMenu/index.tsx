import { GhostButton } from "@components/GhostButton";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper, StyledTab, TabsMenuWrapper } from "./style";
import { selectSportNames } from "@services/articlesSelectors";
import { SelectChangeEvent } from "@mui/material";
import { useAppSelector } from "../../store";
import { TOrderByTypes, TSportOptions } from "@services/types/articlesApiTypes";
import { TOrderBy } from "@features/article/types";
import { FC, useEffect } from "react";
import { selectIsLogin } from "@features/user/usersSelectors";

interface ITabsMenuProps {
  orderBy: TOrderBy;
  handleOrderBy: (filter: TOrderByTypes) => void;
  handleTypeChange?: (e: SelectChangeEvent<unknown>) => void;
  sportType?: TSportOptions;
}

const TabsMenu: FC<ITabsMenuProps> = ({
  orderBy,
  handleOrderBy,
  handleTypeChange,
  sportType = "",
}) => {
  const isLogin = useAppSelector(selectIsLogin);
  const types = useAppSelector(selectSportNames);
  useEffect(() => {
    handleOrderBy(filterTabs[0].orderBy);
    if (handleTypeChange) {
      handleTypeChange({ target: { value: "" } } as SelectChangeEvent<unknown>);
    }
  }, [isLogin]);

  return (
    <TabsMenuWrapper>
      <FilterTabsWrapper>
        {filterTabs.map((filter, i) => (
          <GhostButton
            $width="120px"
            key={i}
            onClick={() => handleOrderBy(filter.orderBy)}
          >
            <StyledTab $isActive={filter.orderBy === orderBy}>
              {filter.value}
            </StyledTab>
          </GhostButton>
        ))}
      </FilterTabsWrapper>
      {handleTypeChange && (
        <GhostSelect
          options={types || []}
          value={sportType}
          onChange={handleTypeChange}
          label="Sort by type"
        />
      )}
    </TabsMenuWrapper>
  );
};

export default TabsMenu;
