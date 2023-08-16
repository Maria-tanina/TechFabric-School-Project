import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { InputWithController } from "@components/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import loginValidationSchema from "../../loginValidationSchema";
import { ILoginFormValues } from "../../types";
import { StyledLoginForm, StyledUnderlineText } from "./style";
import { OutlinedButton } from "@components/OutlinedButton";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD_PATH } from "@constants/paths";

export const LoginForm = () => {
  const { control, handleSubmit, formState, reset } = useForm<ILoginFormValues>(
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

  const onSubmit = (data: ILoginFormValues) => {
    console.log(JSON.stringify(data));
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
        disabled={!formState.isValid}
      >
        Log In
      </OutlinedButton>
    </StyledLoginForm>
  );
};
