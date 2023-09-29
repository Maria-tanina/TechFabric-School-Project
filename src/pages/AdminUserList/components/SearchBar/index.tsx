import { MenuHeading, SearchBarFieldsWrapper, SearchBarWrapper } from "./style";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import OutlinedSelect from "@components/OutlinedSelect";
import { OutlinedButton } from "@components/OutlinedButton";
import { InputAdornment, SelectChangeEvent } from "@mui/material";
import StyledFilterInput from "@components/FilterInput/style";
import { useAppDispatch, useAppSelector } from "../../../../store";
import {
  selectGetUsersIsError,
  selectGetUsersIsLoading,
} from "@services/usersApi";
import {
  setAppliedFilterQuery,
  setAppliedFilterRole,
  setDraftFilterQuery,
  setDraftFilterRole,
  setPaginationPage,
} from "@features/admin/adminSlice";
import {
  selectDraftQuery,
  selectDraftRole,
} from "@features/admin/adminSelectors";
import { allRoles } from "@constants/roles";
import { ChangeEvent, KeyboardEvent } from "react";

const SearchBar = () => {
  const draftQuery = useAppSelector(selectDraftQuery);

  const draftRole = useAppSelector(selectDraftRole);

  const isUsersLoading = useAppSelector(selectGetUsersIsLoading);

  const isError = useAppSelector(selectGetUsersIsError);

  const dispatch = useAppDispatch();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDraftFilterQuery(e.target.value));
  };

  const handleRoleChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(setDraftFilterRole(e.target.value as string));
  };

  const handleSearchClick = () => {
    dispatch(setAppliedFilterQuery(draftQuery));
    dispatch(setAppliedFilterRole(draftRole));
    dispatch(setPaginationPage(0));
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const isFieldsDisabled = isUsersLoading || isError;

  return (
    <div>
      <MenuHeading>Search users</MenuHeading>
      <SearchBarWrapper>
        <SearchBarFieldsWrapper>
          <StyledFilterInput
            value={draftQuery}
            onChange={handleQueryChange}
            placeholder="Enter the name or email..."
            onKeyDown={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
              disabled: isFieldsDisabled,
            }}
          />

          <OutlinedSelect
            value={draftRole}
            options={allRoles}
            label="Role"
            onChange={handleRoleChange}
            disabled={isFieldsDisabled}
          />
        </SearchBarFieldsWrapper>

        <OutlinedButton
          $width="18%"
          onClick={handleSearchClick}
          disabled={isFieldsDisabled}
        >
          Search
        </OutlinedButton>
      </SearchBarWrapper>
    </div>
  );
};

export default SearchBar;
