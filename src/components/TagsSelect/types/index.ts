import { AutocompleteProps } from "@mui/material";

export interface IOption {
  title: string;
}
export interface IAutocompleteSelectProps
  extends AutocompleteProps<IOption, true, false, false> {
  options: IOption[];
  title: string;
}
