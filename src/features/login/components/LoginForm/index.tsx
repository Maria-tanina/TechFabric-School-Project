import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { InputWithController } from "@components/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import loginValidationSchema from "@features/login/loginValidationSchema";
import { StyledLoginForm, StyledUnderlineText } from "./style";
import { OutlinedButton } from "@components/OutlinedButton";
import { Link, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_PATH, HOME_PATH } from "@constants/paths";
import { useLoginMutation } from "@services/authApi";
import { ILoginData } from "@customTypes/authTypes";
import { useAppDispatch } from "../../../../store";
import { setIsLogin } from "@features/user/usersSlice";
import { getErrorMessage } from "@helpers/errorHandlers";
import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { useNotification } from "@hooks/useNotification";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const LoginForm = () => {
  const [login, { isLoading: isLoginLoading, isSuccess: isLoginSuccess }] =
    useLoginMutation();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { showNotification } = useNotification();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { control, handleSubmit, formState, reset } = useForm<ILoginData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  useEffect(() => {
    isLoginSuccess &&
      showNotification("You have successfully logged in", "success");
  }, [isLoginSuccess]);

  const onSubmit = async (loginData: ILoginData) => {
    try {
      await login(loginData).unwrap();
      dispatch(setIsLogin(true));
      navigate(HOME_PATH);
    } catch (error) {
      showNotification(
        getErrorMessage(error) || "Some error occurred...",
        "error"
      );
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
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
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <StyledUnderlineText>
        <Link to={FORGOT_PASSWORD_PATH}>Forgot Your Password?</Link>
      </StyledUnderlineText>

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid || isLoginLoading}
      >
        {isLoginLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Log In"
        )}
      </OutlinedButton>
    </StyledLoginForm>
  );
};
