import { FormControl, IconButton, MenuItem, SelectProps } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { FC, useState } from "react";
import { StyledTableSelect } from "./style";
import { Role } from "@constants/roles";

interface ISelectProps extends SelectProps {
  options: Role[];
}

const TableSelect: FC<ISelectProps> = ({ options, ...rest }) => {
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
        {...(rest as SelectProps)}
        IconComponent={() => (
          <IconButton onClick={handleOpen}>
            <EastIcon />
          </IconButton>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledTableSelect>
    </FormControl>
  );
};

export default TableSelect;
