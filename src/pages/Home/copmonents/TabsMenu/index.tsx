import { GhostButton } from "@components/GhostButton";
import { NavLink } from "react-router-dom";
import { HOME_PATH } from "@constants/paths";
import CustomSelect from "@components/Select";

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
      <div style={{ display: "flex", gap: "12px" }}>
        <GhostButton $width="140px">
          <NavLink
            to={HOME_PATH}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 800 : 500,
              };
            }}
          >
            Last Articles
          </NavLink>
        </GhostButton>

        <GhostButton $width="140px">
          <NavLink
            to="/path"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 800 : 500,
              };
            }}
          >
            Top Rated
          </NavLink>
        </GhostButton>

        <GhostButton $width="140px">
          <NavLink
            to="/path"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? 800 : 500,
              };
            }}
          >
            All Posts
          </NavLink>
        </GhostButton>
      </div>

      <CustomSelect />
    </div>
  );
};

export default TabsMenu;
