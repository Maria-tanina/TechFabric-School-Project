import { IconButton, MenuItem, SelectProps } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import { StyledGhostSelect } from "./style";
import { StyledFormControl, StyledLabel } from "@components/Select";

interface ISelectProps extends SelectProps {
  options: string[];
  label: string;
  value: string;
}

const GhostSelect: FC<ISelectProps> = ({ options, label, value, ...rest }) => {
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
        {...(rest as SelectProps)}
        open={open}
        value={value}
        onOpen={handleOpen}
        onClose={handleClose}
        IconComponent={() => (
          <IconButton onClick={handleOpen}>
            <EastIcon />
          </IconButton>
        )}
      >
        <MenuItem value="All">All</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledGhostSelect>
      <StyledLabel value={value} shrink={false}>
        {label}
      </StyledLabel>
    </StyledFormControl>
  );
};

export default GhostSelect;
