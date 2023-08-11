import {ChangeEvent, ReactNode} from "react";
import {Control} from "react-hook-form";

export interface IRegistrationFormValues {
  name: string;
  surname: string;
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
  control: Control<IRegistrationFormValues, any>;
  name: keyof IRegistrationFormValues;
}

export type TInternalProps = "errorMessage" | "value" | "onChange" | "error";
