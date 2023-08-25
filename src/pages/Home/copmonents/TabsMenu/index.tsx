import { GhostButton } from "@components/GhostButton";
import { NavLink } from "react-router-dom";
import GhostSelect from "@components/GhostSelect";
import { filterTabs } from "./filterMenuConfig";
import { FilterTabsWrapper } from "./style";
import { nanoid } from "@reduxjs/toolkit";

const options = ["Theme1", "Theme2", "Theme3"];

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
        {filterTabs.map((filter) => (
          <GhostButton $width="140px" key={nanoid()}>
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
    </div>
  );
};

export default TabsMenu;
