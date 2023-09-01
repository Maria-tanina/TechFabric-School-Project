import * as Yup from "yup";

const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .trim(),
  message: Yup.string().required("Message is required").trim(),
});

export default contactUsValidationSchema;
