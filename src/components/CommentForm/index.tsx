import { InputWithController } from "@components/Input";
import { useForm } from "react-hook-form";
import {
  CommentsButtonWrapper,
  StyledCommentForm,
} from "@components/CommentForm/style";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";

interface ICommentMessage {
  message: string;
}

export const CommentForm = () => {
  const { control, handleSubmit, reset } = useForm<ICommentMessage>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (message: ICommentMessage) => {
    console.log(message);
  };
  const onReset = () => {
    reset();
  };

  return (
    <StyledCommentForm onSubmit={handleSubmit(onSubmit)}>
      <InputWithController
        control={control}
        name="message"
        inputType="text"
        label="Write your comment here"
      />
      <CommentsButtonWrapper>
        <OutlinedButton type="submit" variant="contained">
          Send comment
        </OutlinedButton>
        <GhostButton onClick={onReset}>Clear input</GhostButton>
      </CommentsButtonWrapper>
    </StyledCommentForm>
  );
};
