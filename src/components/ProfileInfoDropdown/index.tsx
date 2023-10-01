import { FC, useState } from "react";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import ProfileInfo from "@components/ProfileInfo";
import { useAppDispatch } from "../../store";
import { logOut } from "@features/user/usersSlice";
import { useNotification } from "@hooks/useNotification";
import { StyledMenuItem } from "@components/ProfileInfoDropdown/style";

interface IAccountMenuProps {
  fullName: string;
  role: string;
}

export const ProfileInfoDropdown: FC<IAccountMenuProps> = ({
  fullName,
  role,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useAppDispatch();

  const { showNotification } = useNotification();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(logOut());
    showNotification("You have successfully logged out", "success");
  };

  return (
    <>
      <ProfileInfo userName={fullName} subtitle={role} onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <StyledMenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </StyledMenuItem>
      </Menu>
    </>
  );
};
