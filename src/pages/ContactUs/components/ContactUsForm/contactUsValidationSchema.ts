import * as Yup from "yup";
import { EMAIL_REGEX, NAME_REGEX } from "@constants/regexp";

const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required.")
    .matches(
      NAME_REGEX,
      "Name should start with an uppercase letter and contain only letters"
    )
    .max(50, "Name should not exceed 50 characters."),
  email: Yup.string()
    .required("Email is required.")
    .matches(
      EMAIL_REGEX,
      "Invalid email address. Please enter a valid email address."
    )
    .max(50, "Email should not exceed 50 characters.")
    .trim()
    .lowercase(),
  message: Yup.string()
    .required("Message is required.")
    .min(50, "Enter a meaningful message of more than 50 characters")
    .max(500, "Message should not exceed 500 characters.")
    .trim(),
});

export default contactUsValidationSchema;
