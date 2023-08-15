import {StyledForgotPasswordForm} from "@features/forgotPassword/components/ForgotPasswordForm/style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import forgotPasswordValidationSchema from "@features/forgotPassword/forgotPasswordValidationSchema";
import {useEffect} from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {InputWithController} from "@components/Input";
import {OutlinedButton} from "@components/OutlinedButton";
import {IForgotPasswordFormValues} from "@features/forgotPassword/types";

export const ForgotPasswordForm = () => {
  const {control, handleSubmit, formState, reset} = useForm<IForgotPasswordFormValues>({
    defaultValues: {
      email: ""
    },
    mode: "all",
    resolver: yupResolver(forgotPasswordValidationSchema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = (data: IForgotPasswordFormValues) => {
    console.log(JSON.stringify(data));
  }

  return(
    <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        autocomplete="new-email"
        icon={<EmailOutlinedIcon/>}
      />

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid}
      >
        Send me the instructions
      </OutlinedButton>
    </StyledForgotPasswordForm>
  )
}