import { GhostButton } from "@components/GhostButton";
import { NavLink } from "react-router-dom";
import CustomSelect from "../CustomSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper } from "./style";

const TabsMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "12px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FilterTabsWrapper>
        {filterTabs.map(filter => <GhostButton $width="140px">
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
        </GhostButton>)}
      </FilterTabsWrapper>

      <CustomSelect />
    </div>
  );
};

export default TabsMenu;
