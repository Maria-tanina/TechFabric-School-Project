import { MenuHeading, SearchBarFieldsWrapper, SearchBarWrapper } from "./style";
import { ChangeEvent, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import OutlinedSelect from "../OutlinedSelect";
import { OutlinedButton } from "@components/OutlinedButton";
import { InputAdornment } from "@mui/material";
import StyledFilterInput from "@components/FilterInput/style";
import { roles } from "./roles";
import { setFilterQuery, setSelectedRole } from "@features/user/usersSlice";
import { useAppDispatch } from "../../../../store";

const SearchBar = () => {
  const [tempFilterQuery, setTempFilterQuery] = useState("");
  const [tempSelectedRole, setTempSelectedRole] = useState("");

  const dispatch = useAppDispatch();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempFilterQuery(e.target.value);
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTempSelectedRole(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setFilterQuery(tempFilterQuery));
    dispatch(setSelectedRole(tempSelectedRole));
  };

  return (
    <div>
      <MenuHeading>Search users</MenuHeading>
      <SearchBarWrapper>
        <SearchBarFieldsWrapper>
          <StyledFilterInput
            value={tempFilterQuery}
            onChange={handleQueryChange}
            placeholder="Enter the nickname or email..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <OutlinedSelect
            value={tempSelectedRole}
            options={roles}
            label="Role"
            onChange={handleRoleChange}
          />
        </SearchBarFieldsWrapper>

        <OutlinedButton $width="18%" onClick={handleSearchClick}>
          Search
        </OutlinedButton>
      </SearchBarWrapper>
    </div>
  );
};

export default SearchBar;
