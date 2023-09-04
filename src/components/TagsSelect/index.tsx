import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CloseIcon from "@mui/icons-material/Close";
import { IAutocompleteSelectProps } from "@components/TagsSelect/types";
import { AutocompleteProps } from "@mui/material";

const AutocompleteSelect: FC<IAutocompleteSelectProps> = ({
  options,
  title,
  ...rest
}) => {
  const optionsWithTitle = [{ title }, ...options];

  const getOptionDisabled = (option: { title: string }) => {
    return option.title === title;
  };

  const filterOptions = (
    options: Array<{ title: string }>,
    state: { inputValue: string }
  ) => {
    if (state.inputValue) {
      return options.filter(
        (option, index) =>
          index === 0 || option.title.includes(state.inputValue)
      );
    }
    return options;
  };

  return (
    <Autocomplete
      {...(rest as AutocompleteProps<any, any, any, any>)}
      multiple
      options={optionsWithTitle}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      getOptionDisabled={getOptionDisabled}
      filterOptions={filterOptions}
      ChipProps={{
        deleteIcon: <CloseIcon />,
      }}
      disablePortal={true}
    />
  );
};

export default AutocompleteSelect;
