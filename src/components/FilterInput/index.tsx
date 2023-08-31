import StyledFilterInput from "@components/FilterInput/style";
import { InputAdornment } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const FilterInput = () => {
  return (
    <StyledFilterInput
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircleOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FilterInput;
