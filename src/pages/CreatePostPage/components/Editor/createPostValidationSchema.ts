import * as Yup from "yup";

const createPostValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").trim(),
  description: Yup.string().required("Description is required").trim(),
  sport: Yup.string().required("Sport type is required").trim(),
});

export default createPostValidationSchema;
