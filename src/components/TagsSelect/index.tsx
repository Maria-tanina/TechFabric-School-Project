import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CloseIcon from "@mui/icons-material/Close";
import {
  IAutocompleteSelectProps,
  IOption,
} from "@components/TagsSelect/types";
import { AutocompleteProps } from "@mui/material";

const AutocompleteSelect: FC<IAutocompleteSelectProps> = ({
  options,
  title,
  ...rest
}) => {
  const optionsWithTitle = [{ title }, ...options];

  const noOptionsTitle = "No options";

  const getOptionDisabled = (option: { title: string } | string) => {
    if (typeof option === "string") {
      return false;
    } else {
      return option.title === title || option.title === noOptionsTitle;
    }
  };

  const filterOptions = (
    options: (IOption | string)[],
    state: { inputValue: string }
  ) => {
    if (state.inputValue) {
      const filteredOptions = options.filter((option, index) => {
        if (index === 0) {
          return true;
        }
        return (
          (typeof option === "string" && option.includes(state.inputValue)) ||
          (typeof option !== "string" &&
            option.title.includes(state.inputValue))
        );
      });

      if (filteredOptions.length === 1) {
        return [{ title }, { title: noOptionsTitle }];
      } else {
        return filteredOptions;
      }
    }
    return options;
  };

  return (
    <Autocomplete
      {...(rest as AutocompleteProps<IOption | string, true, false, true>)}
      multiple
      options={optionsWithTitle}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.title
      }
      freeSolo
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
