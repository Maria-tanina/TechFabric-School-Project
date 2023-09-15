import * as Yup from "yup";
import { NAME_REGEX, PASSWORD_REGEX } from "@constants/regexp";

const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Name is required")
    .matches(
      NAME_REGEX,
      "Name should start with an uppercase letter, contain only letters and not contain spaces"
    )
    .max(50,"Name should not exceed 50 characters."),
  lastName: Yup.string()
    .required("Surname is required")
    .matches(
      NAME_REGEX,
      "Surname should start with an uppercase letter and contain only letters"
    )
    .max(50,"Surname should not exceed 50 characters."),
  email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
      .max(50,"Email should not exceed 50 characters."),
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character (-, _, +, =) and not contain spaces"
    ),
  repeatPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "The entered passwords don't match")
    .max(32,"Password should not exceed 32 characters."),
});

export default registrationValidationSchema;
