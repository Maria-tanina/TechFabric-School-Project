import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { InputWithController } from "@components/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { OutlinedButton } from "@components/OutlinedButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNotification } from "@hooks/useNotification";
import contactUsValidationSchema from "@pages/ContactUs/components/ContactUsForm/contactUsValidationSchema";
import { StyledLoginForm } from "@features/login/components/LoginForm/style";

interface IContactUsFormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactUsForm = () => {
  const { showNotification } = useNotification();

  const { control, handleSubmit, formState, reset } =
    useForm<IContactUsFormValues>({
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
      mode: "all",
      resolver: yupResolver(contactUsValidationSchema),
    });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = (contactUsData: IContactUsFormValues) => {
    showNotification("Our manager contact you soon", "success");
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="name"
        inputType="text"
        label="Your name..."
        icon={<AccountCircleOutlinedIcon />}
      />
      <InputWithController
        control={control}
        name="email"
        inputType="email"
        label="Enter the e-mail..."
        icon={<EmailOutlinedIcon />}
      />

      <InputWithController
        control={control}
        name="message"
        inputType="text"
        label="Message..."
        multiline
        minRows="4"
      />

      <OutlinedButton
        type="submit"
        variant="contained"
        disabled={!formState.isValid}
      >
        Contact us
      </OutlinedButton>
    </StyledLoginForm>
  );
};
