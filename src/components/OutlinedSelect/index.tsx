import { IconButton, MenuItem, SelectProps } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import {
  OutlinedFormControl,
  OutlinedLabel,
  StyledOutlinedSelect,
} from "./style";

interface IOutlinedSelectProps extends SelectProps {
  options: string[];
}

const OutlinedSelect: FC<IOutlinedSelectProps> = ({ options, ...rest }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { label, disabled, value } = rest;

  const handleOpen = () => {
    if (!disabled) setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <OutlinedFormControl>
      <StyledOutlinedSelect
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        disabled={disabled}
        {...(rest as SelectProps)}
        IconComponent={() => (
          <IconButton onClick={handleOpen}>
            <EastIcon />
          </IconButton>
        )}
      >
        <MenuItem value="">All</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledOutlinedSelect>
      <OutlinedLabel id="select-label" value={value as string} shrink={false}>
        {label}
      </OutlinedLabel>
    </OutlinedFormControl>
  );
};

export default OutlinedSelect;
