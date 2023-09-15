import * as Yup from "yup";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@constants/regexp";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(
      EMAIL_REGEX,
      "Invalid email address. Please enter a valid email address."
    )
    .max(50, "Email should not exceed 50 characters.")
    .trim()
    .lowercase(),
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =) and not contain spaces"
    )
    .max(32, "Password should not exceed 32 characters."),
});

export default loginValidationSchema;
