import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { InputWithController } from "@components/Input";
import { OutlinedButton } from "@components/OutlinedButton";
import passwordRecoveryValidationSchema from "../../passwordRecoveryValidationSchema";
import { IPasswordRecoveryFormValues } from "../../types";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { StyledForm } from "@components/Form";
import { useRecoveryPasswordMutation } from "@services/authApi";
import { useLocation } from "react-router-dom";
import { LSService } from "@services/localStorage";
import { CircularProgress } from "@mui/material";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

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
  const { showNotification } = useNotification();

  const [passwords, { isLoading, isError, isSuccess, error }] =
    useRecoveryPasswordMutation();

  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    storage.set("token", token);
  }, [token]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  useEffect(() => {
    isError && showNotification(errorMessage, "error");
    isSuccess &&
      showNotification("Password was successfully changed", "success");
  }, [isSuccess, isError]);

  const onSubmit = async (data: IPasswordRecoveryFormValues) => {
    await passwords({ passwords: data, token });
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
    </StyledForm>
  );
};
