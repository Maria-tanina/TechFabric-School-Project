import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect} from "react";
import {StyledForgotPasswordForm} from "@features/forgotPassword/components/ForgotPasswordForm/style";
import {InputWithController} from "@components/Input";
import {OutlinedButton} from "@components/OutlinedButton";
import passwordRecoveryValidationSchema from "@features/passwordRecovery/passwordRecoveryValidationSchema";
import {IPasswordRecoveryFormValues} from "@features/passwordRecovery/types";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

export const PasswordRecoveryForm = () => {
  const {control, handleSubmit, formState, reset} = useForm<IPasswordRecoveryFormValues>({
    defaultValues: {
      password: "",
      repeatPassword: ""
    },
    mode: "all",
    resolver: yupResolver(passwordRecoveryValidationSchema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = (data: IPasswordRecoveryFormValues) => {
    console.log(JSON.stringify(data));
  }

  return(
    <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="password"
        inputType="password"
        label="Enter the new password..."
        autocomplete="password"
        icon={<VpnKeyOutlinedIcon/>}
      />

      <InputWithController
        control={control}
        name="repeatPassword"
        inputType="password"
        label="Enter the password again..."
        autocomplete="new-password"
        icon={<VpnKeyOutlinedIcon/>}
      />

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid}
      >
        Save this new password
      </OutlinedButton>
    </StyledForgotPasswordForm>
  )
}