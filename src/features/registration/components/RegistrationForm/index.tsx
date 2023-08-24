import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegistrationFormValues } from "../../types";
import { AlertStyle, StyledRegistrationForm } from "./style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { InputWithController } from "@components/Input";
import { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { SignUpButton } from "@components/SignUpButton";
import registrationValidationSchema from "../../registrationValidationSchema";
import { useSignupMutation } from "@services/authApi";
import { CircularProgress, Snackbar } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { REGISTRATION_CONFIRM_PATH } from "@constants/paths";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {LSService} from "@services/localStorage";

const RegistrationForm = () => {
  const { control, handleSubmit, formState, reset } =
    useForm<IRegistrationFormValues>({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      mode: "all",
      resolver: yupResolver(registrationValidationSchema),
    });

  const [signup, { isLoading, isError, isSuccess, error }] =
    useSignupMutation();

  const navigate = useNavigate();

  const [isAlert, setIsAlert] = useState(true);

  const storage = LSService()

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  useEffect(() => {
    isSuccess && navigate(REGISTRATION_CONFIRM_PATH);
  }, [isSuccess]);

  const onSubmit = async (data: IRegistrationFormValues) => {
    await signup(data);
    storage.set("email", data.email)
    setIsAlert(true);
  };

  const errorMessage = isError ? getErrorMessage((error as FetchBaseQueryError).data) : '';

  return (
    <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="firstName"
        inputType="text"
        label="Enter your name..."
        icon={<AccountCircleOutlinedIcon />}
      />

      <InputWithController
        control={control}
        name="lastName"
        inputType="text"
        label="Enter your surname..."
        icon={<AccountCircleOutlinedIcon />}
      />

      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        autocomplete="new-email"
        icon={<EmailOutlinedIcon />}
      />

      <InputWithController
        control={control}
        name="password"
        inputType="password"
        label="Enter the password..."
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

      <SignUpButton
        type="submit"
        variant="contained"
        startIcon={<MailOutlineIcon />}
        disabled={!formState.isValid}
      >
        {isLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Sign up with Email"
        )}
      </SignUpButton>
      {isError && (
        <Snackbar open={isAlert}>
          <AlertStyle onClose={() => setIsAlert(false)} severity="error">
            {errorMessage}
          </AlertStyle>
        </Snackbar>
      )}
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
