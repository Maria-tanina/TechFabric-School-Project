import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import forgotPasswordValidationSchema from "../../forgotPasswordValidationSchema";
import { useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { InputWithController } from "@components/Input";
import { OutlinedButton } from "@components/OutlinedButton";
import { IForgotPasswordFormValues } from "../../types";
import { StyledForm } from "@components/Form";
import { useForgotPasswordMutation } from "@services/authApi";
import { CircularProgress, Snackbar } from "@mui/material";
import { AlertStyle } from "@features/forgotPassword/components/ForgotPasswordForm/style";

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

  const [isAlert, setIsAlert] = useState(true);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 30000);
    }
  }, [formState.isSubmitSuccessful]);

  const onSubmit = async (data: IForgotPasswordFormValues) => {
    email(data);
    setIsAlert(true);
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
