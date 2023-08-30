import { ChangeEvent, ReactNode } from "react";
import { Control } from "react-hook-form";
import { InputProps } from "@mui/material";

export interface IRegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

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

export interface IWithControllerProps {
  control: Control<any>;
  name: keyof IRegistrationFormValues;
}

export type TInternalProps = "errorMessage" | "value" | "onChange" | "error";
