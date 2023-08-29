import { IconButton, MenuItem } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { ChangeEvent, FC, useState } from "react";
import { StyledFormControl, StyledLabel, StyledOutlinedSelect } from "./style";
import { nanoid } from "@reduxjs/toolkit";

interface IOutlinedSelectProps {
  options: string[];
  label: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
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
    <StyledFormControl>
      <StyledLabel id="select-label" value={value}>{label}</StyledLabel>
      <StyledOutlinedSelect
        value={value}
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        // @ts-ignore
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
    </StyledFormControl>
  );
};

export default OutlinedSelect;
