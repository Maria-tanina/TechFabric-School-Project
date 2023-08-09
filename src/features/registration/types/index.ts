import {ChangeEvent, ReactNode} from "react";
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
}