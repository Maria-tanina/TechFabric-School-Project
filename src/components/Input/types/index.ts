import { ChangeEvent, ReactNode } from "react";
import { InputProps } from "@mui/material";

export interface IInputProps extends InputProps {
  inputType: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  icon?: ReactNode;
  autocomplete?: string;
  endAdornment?: ReactNode;
}
