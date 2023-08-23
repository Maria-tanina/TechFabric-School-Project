import { MenuHeading, SearchBarFieldsWrapper, SearchBarWrapper } from "./style";
import { ChangeEvent, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import OutlinedSelect from "../OutlinedSelect";
import { OutlinedButton } from "@components/OutlinedButton";
import { InputAdornment } from "@mui/material";
import StyledFilterInput from "@components/FilterInput/style";
import { roles } from "./roles";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <MenuHeading>Search users</MenuHeading>
      <SearchBarWrapper>
        <SearchBarFieldsWrapper>
          <StyledFilterInput
            value={value}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <OutlinedSelect options={roles} label="Role" />
        </SearchBarFieldsWrapper>

        <OutlinedButton $width="18%">Search</OutlinedButton>
      </SearchBarWrapper>
    </div>
  );
};

export default SearchBar;
