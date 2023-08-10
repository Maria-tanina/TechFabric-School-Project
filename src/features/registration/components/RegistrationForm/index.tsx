import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import {IRegistrationFormValues} from "@features/registration/types";
import {StyledForm} from "@features/registration/components/RegistrationForm/style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {DarkButton} from "@components/Buttons";
import {InputWithController} from "@features/registration/components/Input";
import {useEffect} from "react";
import {UserIcon} from "@icons/UserIcon";
import {EmailIcon} from "@icons/EmailIcon";
import {KeyIcon} from "@icons/KeyIcon";


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]*$/, "Name should start with an uppercase letter and contain only letters")
    .trim(),
  surname: Yup.string()
    .required('Surname is required')
    .matches(/^[A-Z][a-z]*$/, "Surname should start with an uppercase letter and contain only letters")
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_+=]).{8,}$/,  'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =)'),
  repeatPassword: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], 'Something wrong...')
})

const RegistrationForm = () => {
  const {control, handleSubmit, formState, reset} = useForm<IRegistrationFormValues>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    mode: "all",
    resolver: yupResolver(validationSchema),
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="name"
        inputType="text"
        label="Enter your name..."
        icon={<UserIcon/>}
      />

      <InputWithController
        control={control}
        name="surname"
        inputType="text"
        label="Enter your surname..."
        icon={<UserIcon/>}
      />

      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        autocomplete="new-email"
        icon={<EmailIcon/>}
      />

      <InputWithController
        control={control}
        name="password"
        inputType="password"
        label="Enter the password..."
        autocomplete="password"
        icon={<KeyIcon/>}
      />

      <InputWithController
        control={control}
        name="repeatPassword"
        inputType="password"
        label="Enter the password again..."
        autocomplete="new-password"
        icon={<KeyIcon/>}
      />

      <DarkButton disabled={!formState.isValid}>
        <MailOutlineIcon />
        Sign up with Email
      </DarkButton>
    </StyledForm>
  )
}

export default RegistrationForm;