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
  const optionsWithTitle = [title, ...options];

  const noOptionsTitle = "No options";

  const getOptionDisabled = (option: string) => {
    return option === title || option === noOptionsTitle;
  };

  const filterOptions = (options: string[], state: { inputValue: string }) => {
    if (state.inputValue) {
      const filteredOptions = options.filter((option, index) => {
        if (index === 0) {
          return true;
        }
        return option.toLowerCase().includes(state.inputValue.toLowerCase());
      });

      if (filteredOptions.length === 1) {
        return [title, noOptionsTitle];
      } else {
        return filteredOptions;
      }
    }
    return options;
  };

  const isOptionEqualToValue = (option: string, value: string) => {
    return option === value || value === "";
  };

  return (
    <Autocomplete
      {...(rest as AutocompleteProps<string, any, any, any>)}
      options={optionsWithTitle}
      filterSelectedOptions
      getOptionDisabled={getOptionDisabled}
      isOptionEqualToValue={isOptionEqualToValue}
      filterOptions={filterOptions}
      ChipProps={{
        deleteIcon: <CloseIcon />,
      }}
      disablePortal={true}
    />
  );
};

export default AutocompleteSelect;
