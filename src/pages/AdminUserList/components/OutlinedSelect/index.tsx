import { IconButton, MenuItem } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import { StyledFormControl, StyledLabel, StyledOutlinedSelect } from "./style";
import { nanoid } from "@reduxjs/toolkit";

const OutlinedSelect: FC<{ options: string[]; label: string }> = ({
  options,
  label,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledFormControl>
      <StyledLabel id="select-label">{label}</StyledLabel>
      <StyledOutlinedSelect
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
      </StyledOutlinedSelect>
    </StyledFormControl>
  );
};

export default OutlinedSelect;
