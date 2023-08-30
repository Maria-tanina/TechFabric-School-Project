import { IconButton, MenuItem, SelectChangeEvent } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, ReactNode, useState } from "react";
import {
  OutlinedFormControl,
  OutlinedLabel,
  StyledOutlinedSelect,
} from "./style";
import { nanoid } from "@reduxjs/toolkit";

interface IOutlinedSelectProps {
  options: string[];
  label: string;
  onChange: (e: SelectChangeEvent<unknown>, child: ReactNode) => void;
  value: string;
  disabled?: boolean;
}

const OutlinedSelect: FC<IOutlinedSelectProps> = ({
  options,
  label,
  onChange,
  value,
  disabled,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (!disabled) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <OutlinedFormControl>
      <StyledOutlinedSelect
        value={value}
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        onChange={onChange}
        disabled={disabled}
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
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledOutlinedSelect>
      <OutlinedLabel id="select-label" value={value}>
        {label}
      </OutlinedLabel>
    </OutlinedFormControl>
  );
};

export default OutlinedSelect;
