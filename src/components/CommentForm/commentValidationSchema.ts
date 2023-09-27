import * as Yup from "yup";

const commentsValidationSchema = Yup.object().shape({
  message: Yup.string()
    .required("Message is required")
    .max(400, "Message should not exceed 400 characters.")
    .trim(),
});

export default commentsValidationSchema;
