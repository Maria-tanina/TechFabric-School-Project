import {InputAdornment} from "@mui/material";
import {StyledTextField} from "@features/registration/components/Input/style";
import {FC} from "react";
import {IInputProps} from "@features/registration/types";
import {WithController} from "@features/registration/components/WithController";

const Input: FC<IInputProps> = ({
  inputType,
  value,
  onChange,
  error,
  errorMessage,
  label,
  icon
}) => {
  return(
    <StyledTextField
      type={inputType}
      placeholder={label}
      value={value}
      onChange={onChange}
      fullWidth
      helperText={errorMessage}
      error={error}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }}
    />
  )
}

export const InputWithController = WithController<IInputProps>(Input);
