import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import forgotPasswordValidationSchema from "@features/forgotPassword/forgotPasswordValidationSchema";
import { useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { InputWithController } from "@components/Input";
import { OutlinedButton } from "@components/OutlinedButton";
import { IForgotPasswordFormValues } from "@features/forgotPassword/types";
import { StyledForm } from "@components/Form";
import { useForgotPasswordMutation } from "@services/authApi";
import { CircularProgress } from "@mui/material";
import { useNotification } from "@hooks/useNotification";
import { getErrorMessage } from "@helpers/errorHandlers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BUTTON_DISABLE } from "@constants/timers";

export const ForgotPasswordForm = () => {
  const { control, handleSubmit, formState } =
    useForm<IForgotPasswordFormValues>({
      defaultValues: {
        email: "",
      },
      mode: "all",
      resolver: yupResolver(forgotPasswordValidationSchema),
    });

  const [email, { isLoading, isError, isSuccess, error }] =
    useForgotPasswordMutation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { showNotification } = useNotification();
  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    if (isSuccess || isError) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, BUTTON_DISABLE);
    }
    isError && showNotification(errorMessage, "error");
    isSuccess && showNotification("Check your email", "success");
  }, [isSuccess, isError]);

  const onSubmit = async (data: IForgotPasswordFormValues) => {
    email(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        autocomplete="new-email"
        icon={<EmailOutlinedIcon />}
      />

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid || isLoading || isButtonDisabled}
      >
        {isLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Send me the instructions"
        )}
      </OutlinedButton>
    </StyledForm>
  );
};
