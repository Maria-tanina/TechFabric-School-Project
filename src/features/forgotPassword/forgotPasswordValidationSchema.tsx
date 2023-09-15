import * as Yup from "yup";
import { EMAIL_REGEX } from "@constants/regexp";

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .max(50, "Email should not exceed 50 characters.")
    .matches(
      EMAIL_REGEX,
      "Invalid email address. Please enter a valid email address."
    )
    .trim()
    .lowercase(),
});

export default forgotPasswordValidationSchema;
