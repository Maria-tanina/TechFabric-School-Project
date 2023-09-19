import { MenuItem, StandardTextFieldProps, TextField } from "@mui/material";
import { FC } from "react";
import { StyledPaginationSelectWrapper } from "./styles";

interface IPaginationSelectProps extends StandardTextFieldProps {
  options: number[];
}

export const PaginationSelect: FC<IPaginationSelectProps> = ({
  options,
  ...rest
}) => {
  return (
    <StyledPaginationSelectWrapper>
      <div>Articles per page: </div>
      <TextField select {...rest}>
        {options.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </StyledPaginationSelectWrapper>
  );
};
