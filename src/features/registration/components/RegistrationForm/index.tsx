import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {IRegistrationFormValues} from "@features/registration/types";
import {StyledRegistrationForm} from "@features/registration/components/RegistrationForm/style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {InputWithController} from "@components/Input";
import {useEffect} from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import {SignUpButton} from "@components/SignUpButton";
import registrationValidationSchema from "@features/registration/registrationValidationSchema";

const RegistrationForm = () => {
  const {control, handleSubmit, formState, reset} = useForm<IRegistrationFormValues>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: ""
    },
    mode: "all",
    resolver: yupResolver(registrationValidationSchema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset])

  const onSubmit = (data: IRegistrationFormValues) => {
    console.log(JSON.stringify(data));
  }

  return(
    <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="name"
        inputType="text"
        label="Enter your name..."
        icon={<AccountCircleOutlinedIcon/>}
      />

      <InputWithController
        control={control}
        name="surname"
        inputType="text"
        label="Enter your surname..."
        icon={<AccountCircleOutlinedIcon/>}
      />

      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        autocomplete="new-email"
        icon={<EmailOutlinedIcon/>}
      />

      <InputWithController
        control={control}
        name="password"
        inputType="password"
        label="Enter the password..."
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

      <SignUpButton
        type="submit"
        variant="contained"
        startIcon={<MailOutlineIcon />}
        disabled={!formState.isValid}
      >
        Sign up with Email
      </SignUpButton>
    </StyledRegistrationForm>
  )
}

export default RegistrationForm;
