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
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { HOME_PATH } from "@constants/paths";
import { useTokenFromUrlAndLocalStorage } from "@hooks/useToken";

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
      navigate(HOME_PATH);
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
