import { ChangeEvent, ReactNode } from "react";
import { Control } from "react-hook-form";

export interface IRegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IInputProps {
  inputType: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  error: boolean;
  errorMessage?: string;
  label?: string;
  icon?: ReactNode;
  autocomplete?: string;
}

export interface IWithControllerProps {
  control: Control<any>;
  name: string;
}

export type TInternalProps = "errorMessage" | "value" | "onChange" | "error";
