import { FormControl, IconButton, MenuItem } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { ChangeEvent, FC, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { StyledTableSelect } from "./style";
import { Role } from "@constants/roles";

interface ISelectProps {
  options: Role[];
  defaultValue: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const TableSelect: FC<ISelectProps> = ({ options, defaultValue, onChange }) => {
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
        // @ts-ignore
        onChange={onChange}
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
