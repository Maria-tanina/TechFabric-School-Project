import { FormControl, IconButton, MenuItem } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { FC, useState } from "react";
import { StyledLabel, StyledSelect } from "./style";
import { nanoid } from "@reduxjs/toolkit";

const CustomSelect: FC<{options: string[]}> = ({
  options
}) => {
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
            <EastIcon />
          </IconButton>
        )}
      >

        {options.map((option) => (
          <MenuItem key={nanoid()} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;