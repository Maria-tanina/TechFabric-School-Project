import { FC, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import ProfileInfo from "@components/ProfileInfo";
import { useAppDispatch } from "../../store";
import { logOut } from "@features/user/usersSlice";
import { useNotification } from "@hooks/useNotification";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PATH } from "@constants/paths";

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

  const navigate = useNavigate();

  const { showNotification } = useNotification();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddAnotherAccount = () => {
    handleClose();
    navigate(SIGNUP_PATH);
  };

  const handleLogOut = () => {
    handleClose();
    dispatch(logOut());
    showNotification("You are logged out", "success");
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
        <MenuItem onClick={handleAddAnotherAccount}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
