import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { InputWithController } from "@components/Input";
import { OutlinedButton } from "@components/OutlinedButton";
import passwordRecoveryValidationSchema from "@features/passwordRecovery/passwordRecoveryValidationSchema";
import { IPasswordRecoveryFormValues } from "../../types";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { StyledForm } from "@components/Form";
import { useRecoveryPasswordMutation } from "@services/authApi";
import { useNavigate } from "react-router-dom";
import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { LOGIN_PATH } from "@constants/paths";
import { useTokenFromUrlAndLocalStorage } from "@hooks/useToken";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordRecoveryForm = () => {
  const { control, handleSubmit, formState, reset } =
    useForm<IPasswordRecoveryFormValues>({
      defaultValues: {
        password: "",
        repeatPassword: "",
      },
      mode: "all",
      resolver: yupResolver(passwordRecoveryValidationSchema),
    });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();
  const token = useTokenFromUrlAndLocalStorage();
  const { showNotification } = useNotification();

  const [recoveryPassword, { isLoading, isError, isSuccess, error }] =
    useRecoveryPasswordMutation();

  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    if (isSuccess) {
      showNotification("Password was successfully changed", "success");
      navigate(LOGIN_PATH);
    } else if (isError) {
      showNotification(errorMessage, "error");
      reset();
    }
  }, [isSuccess, isError]);

  const onSubmit = async (data: IPasswordRecoveryFormValues) => {
    await recoveryPassword({ passwords: data, token });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="password"
        inputType={showPassword ? "text" : "password"}
        label="Enter the new password..."
        autocomplete="password"
        icon={<VpnKeyOutlinedIcon />}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <InputWithController
        control={control}
        name="repeatPassword"
        inputType={showPassword ? "text" : "password"}
        label="Enter the password again..."
        autocomplete="new-password"
        icon={<VpnKeyOutlinedIcon />}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid}
      >
        {isLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Save this new password"
        )}
      </OutlinedButton>
    </StyledForm>
  );
};
