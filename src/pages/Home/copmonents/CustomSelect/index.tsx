import { FormControl, IconButton, MenuItem } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';
import { useState } from "react";
import { StyledLabel, StyledSelect } from "./style";

const CustomSelect = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl>
      <StyledLabel>Sort by theme</StyledLabel>
      <StyledSelect
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        IconComponent={() => (
          <IconButton
            onClick={handleOpen}
          >
            {open ? <SouthIcon/> : <EastIcon />}
          </IconButton>
        )}
      >
        <MenuItem value="Theme 1">Theme 1</MenuItem>
        <MenuItem value="Theme 2">Theme 2</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;