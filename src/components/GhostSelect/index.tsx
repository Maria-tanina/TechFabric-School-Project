import { IconButton, MenuItem } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import { StyledGhostSelect } from "./style";
import { nanoid } from "@reduxjs/toolkit";
import { StyledFormControl, StyledLabel } from "@components/Select";

interface ISelectProps {
  options: string[];
}

const GhostSelect: FC<ISelectProps> = ({ options }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledFormControl>
      <StyledGhostSelect
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        defaultValue=""
        IconComponent={() => (
          <IconButton onClick={handleOpen}>
            <EastIcon />
          </IconButton>
        )}
      >
        <MenuItem key={nanoid()} value="">
          All
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={nanoid()} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledGhostSelect>
      <StyledLabel>Sort by theme</StyledLabel>
    </StyledFormControl>
  );
};

export default GhostSelect;
