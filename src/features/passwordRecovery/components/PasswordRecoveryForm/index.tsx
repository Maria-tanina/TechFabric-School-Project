import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { InputWithController } from "@components/Input";
import { OutlinedButton } from "@components/OutlinedButton";
import passwordRecoveryValidationSchema from "../../passwordRecoveryValidationSchema";
import { IPasswordRecoveryFormValues } from "../../types";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { StyledForm } from "@components/Form";
import { useRecoveryPasswordMutation } from "@services/authApi";
import { useLocation } from "react-router-dom";
import { LSService } from "@services/localStorage";
import { CircularProgress, Snackbar } from "@mui/material";
import { AlertStyle } from "@features/forgotPassword/components/ForgotPasswordForm/style";

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

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");

  const storage = LSService();

  const [passwords, { isLoading, isError, isSuccess, error }] =
    useRecoveryPasswordMutation();

  const [isAlert, setIsAlert] = useState(true);

  useEffect(() => {
    storage.set("token", token);
  }, [token]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = async (data: IPasswordRecoveryFormValues) => {
    await passwords({ passwords: data, token });
    setIsAlert(true);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="password"
        inputType="password"
        label="Enter the new password..."
        autocomplete="password"
        icon={<VpnKeyOutlinedIcon />}
      />

      <InputWithController
        control={control}
        name="repeatPassword"
        inputType="password"
        label="Enter the password again..."
        autocomplete="new-password"
        icon={<VpnKeyOutlinedIcon />}
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
      {isError ||
        (isSuccess && (
          <Snackbar open={isAlert}>
            <AlertStyle onClose={() => setIsAlert(false)} severity="error">
              {isError && error}
              {isSuccess && "OK"}
            </AlertStyle>
          </Snackbar>
        ))}
    </StyledForm>
  );
};
