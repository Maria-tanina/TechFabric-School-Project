import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { InputWithController } from "@components/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import loginValidationSchema from "../../loginValidationSchema";
import { StyledLoginForm, StyledUnderlineText } from "./style";
import { OutlinedButton } from "@components/OutlinedButton";
import { Link, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_PATH, HOME_PATH } from "@constants/paths";
import { useGetUsersInfoQuery, useLoginMutation } from "@services/authApi";
import { ILoginData } from "@customTypes/authTypes";
import { LSService } from "@services/localStorage";
import { useAppDispatch } from "../../../../store";
import { setIsLogin } from "@features/user/usersSlice";
import { isErrorWithMessage, isFetchBaseQueryError } from "@helpers/errorHandlers";
import { Alert, CircularProgress } from "@mui/material";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [login, {isLoading: isLoginLoading, isError: isLoginError}] = useLoginMutation();

  const {data} = useGetUsersInfoQuery();

  const { set } = LSService();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { control, handleSubmit, formState, reset } = useForm<ILoginData>(
    {
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "all",
      resolver: yupResolver(loginValidationSchema),
    }
  );

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = async (loginData: ILoginData) => {
    try {
      const {accessToken, refreshToken} = await login(loginData).unwrap();
      set("token", accessToken);
      set("refreshToken", refreshToken);
      console.log(data);
      dispatch(setIsLogin(true));
      navigate(HOME_PATH);
    } catch(err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg =  JSON.stringify(err.data);
        setErrorMessage(errMsg);
      } else if (isErrorWithMessage(err)) {
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <>
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
        inputType="password"
        label="Enter the password..."
        autocomplete="password"
        icon={<VpnKeyOutlinedIcon />}
      />

      <StyledUnderlineText>
        <Link to={FORGOT_PASSWORD_PATH}>Forgot Your Password?</Link>
      </StyledUnderlineText>

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid || isLoginLoading}
      >
        {isLoginLoading ? <CircularProgress size="30px" /> : "Log In"}
      </OutlinedButton>
    </StyledLoginForm>

      {isLoginError ?<Alert severity="error" sx={{ width: '100%', position: "absolute", top: 0, right: 0 }}>
        {errorMessage}
      </Alert> : null}
    </>
  );
};
