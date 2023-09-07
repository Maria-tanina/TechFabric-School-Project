import { GhostButton } from "@components/GhostButton";
import { NavLink } from "react-router-dom";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper, TabsMenuWrapper } from "./style";

const options = ["Theme1", "Theme2", "Theme3"];

const TabsMenu = () => {
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

      <GhostSelect options={options} />
    </TabsMenuWrapper>
  );
};

export default TabsMenu;
