import * as Yup from "yup";
import {PASSWORD_REGEX} from "@constants/regexp";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .matches(PASSWORD_REGEX,  'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =)')
    .trim(),
});

export default loginValidationSchema;