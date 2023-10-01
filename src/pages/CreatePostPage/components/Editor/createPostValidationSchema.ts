import * as Yup from "yup";

const createPostValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(15, "The title must contain from 15 to 70 characters")
    .max(70, "The title must contain from 15 to 70 characters")
    .trim(),
  description: Yup.string()
    .required("Description is required")
    .trim()
    .min(50, "Enter a meaningful description of more than 50 characters")
    .max(150, "The description must be less than 150 characters"),
  sport: Yup.string()
    .required("Sport type is required")
    .max(30, "The sport type cannot contain more than 30 characters")
    .trim(),
});

export default createPostValidationSchema;
