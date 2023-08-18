import { FormControl, IconButton, MenuItem } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';
import { useState } from "react";
import { StyledSelect } from "../Select/style";

const CustomSelect = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl>
      <StyledSelect
        disableUnderline
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

        <MenuItem value={2}>Option 1</MenuItem>
        <MenuItem value={3}>Option 2</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;