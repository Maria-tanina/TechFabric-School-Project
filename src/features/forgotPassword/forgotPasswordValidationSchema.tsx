import * as Yup from "yup";

const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .trim(),
});

export default forgotPasswordValidationSchema;
