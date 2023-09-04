import { AutocompleteProps } from "@mui/material";

export interface IOption {
  title: string;
}
export interface IAutocompleteSelectProps
  extends AutocompleteProps<any, any, any, any> {
  options: IOption[];
  title: string;
}
