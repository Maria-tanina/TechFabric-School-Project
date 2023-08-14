import * as Yup from "yup";
import {NAME_REGEX, PASSWORD_REGEX} from "@constants/regexp";

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(NAME_REGEX, "Name should start with an uppercase letter and contain only letters")
    .trim(),
  surname: Yup.string()
    .required('Surname is required')
    .matches(NAME_REGEX, "Surname should start with an uppercase letter and contain only letters")
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .matches(PASSWORD_REGEX,  'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =)'),
  repeatPassword: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], 'Something wrong...')
});

export default registrationValidationSchema;