import * as Yup from "yup";
import { PASSWORD_REGEX } from "@constants/regexp";

const passwordRecoveryValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =)"
    )
    .max(32, "Password should not exceed 32 characters.")
    .trim(),
  repeatPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "The entered passwords don't match")
    .trim(),
});

export default passwordRecoveryValidationSchema;
