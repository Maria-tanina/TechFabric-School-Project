import { InputAdornment, TextFieldProps } from "@mui/material";
import { StyledTextField } from "@components/Input/style";
import { FC } from "react";
import { IInputProps } from "components/Input/types";
import { WithController } from "@features/WithController";

export const Input: FC<IInputProps> = ({
  inputType,
  value,
  onChange,
  error,
  errorMessage,
  autocomplete,
  label,
  icon,
  endAdornment,
  ...rest
}) => {
  return (
    <StyledTextField
      type={inputType}
      placeholder={label}
      value={value}
      onChange={onChange}
      fullWidth
      helperText={errorMessage}
      error={error}
      autoComplete={autocomplete || ""}
      {...(rest as TextFieldProps)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
        endAdornment: endAdornment,
      }}
    />
  );
};

export const InputWithController = WithController<IInputProps>(Input);
