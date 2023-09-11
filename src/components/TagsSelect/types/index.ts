import { AutocompleteProps } from "@mui/material";

export interface IAutocompleteSelectProps
  extends AutocompleteProps<string, any, any, any> {
  options: string[];
  title: string;
}
