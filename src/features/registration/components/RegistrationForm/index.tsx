import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegistrationFormValues } from "../../types";
import { StyledRegistrationForm } from "./style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { InputWithController } from "@components/Input";
import { MouseEvent, useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { SignUpButton } from "@components/SignUpButton";
import registrationValidationSchema from "../../registrationValidationSchema";
import { useSignupMutation } from "@services/authApi";
import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { REGISTRATION_CONFIRM_PATH } from "@constants/paths";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNotification } from "@hooks/useNotification";
import { useDispatch } from "react-redux";
import { setEmail } from "@features/user/usersSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const errorMessage =
    getErrorMessage((error as FetchBaseQueryError)?.data) ||
    "Some error occurred...";

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  useEffect(() => {
    isError && showNotification(errorMessage, "error");
    isSuccess && navigate(REGISTRATION_CONFIRM_PATH);
  }, [isSuccess, isError]);

  const onSubmit = async (data: IRegistrationFormValues) => {
    await signup(data);
    dispatch(setEmail(data.email));
  };

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
        inputType={showPassword ? "text" : "password"}
        label="Enter the password..."
        autocomplete="password"
        icon={<VpnKeyOutlinedIcon />}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
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
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
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
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
