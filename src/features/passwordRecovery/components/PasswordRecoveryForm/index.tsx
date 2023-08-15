import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect} from "react";
import {InputWithController} from "@components/Input";
import {OutlinedButton} from "@components/OutlinedButton";
import passwordRecoveryValidationSchema from "../../passwordRecoveryValidationSchema";
import {IPasswordRecoveryFormValues} from "../../types";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import {StyledForm} from "@components/Form";

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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
    </StyledForm>
  )
}