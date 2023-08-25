import { FormControl, IconButton, MenuItem } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { StyledTableSelect } from "./style";

interface ISelectProps {
  options: string[];
  defaultValue: string;
}

const TableSelect: FC<ISelectProps> = ({ options, defaultValue }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl>
      <StyledTableSelect
        labelId="select-label"
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        defaultValue={defaultValue}
        IconComponent={() => (
          <IconButton onClick={handleOpen}>
            <EastIcon />
          </IconButton>
        )}
      >
        {options.map((option) => (
          <MenuItem key={nanoid()} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledTableSelect>
    </FormControl>
  );
};

export default TableSelect;
