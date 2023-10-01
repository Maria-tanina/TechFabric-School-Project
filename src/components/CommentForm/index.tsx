import { InputWithController } from "@components/Input";
import { useForm } from "react-hook-form";
import {
  CommentsButtonWrapper,
  StyledCommentForm,
} from "@components/CommentForm/style";
import { OutlinedButton } from "@components/OutlinedButton";
import { GhostButton } from "@components/GhostButton";
import { usePostCommentMutation } from "@services/commentsApi";
import { getErrorTitle } from "@helpers/errorHandlers";
import { useNotification } from "@hooks/useNotification";
import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import commentsValidationSchema from "@components/CommentForm/commentValidationSchema";
import { useAppSelector } from "../../store";
import { selectCommentPageNumber } from "@features/comments/commentsSelectors";

interface ICommentMessage {
  message: string;
}

interface ICommentFormProps {
  articleId: string;
}

export const CommentForm: FC<ICommentFormProps> = ({ articleId }) => {
  const [postComment, { isLoading }] = usePostCommentMutation();

  const { control, handleSubmit, reset, formState } = useForm<ICommentMessage>({
    defaultValues: {
      message: "",
    },
    resolver: yupResolver(commentsValidationSchema),
  });

  const { showNotification } = useNotification();

  const pageNumber = useAppSelector(selectCommentPageNumber);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const onSubmit = async (message: ICommentMessage) => {
    try {
      await postComment({
        articleId,
        content: message.message,
        pageSize: 5,
        pageNumber,
      }).unwrap();
    } catch (error) {
      showNotification(
        getErrorTitle(error) || "Some error occurred...",
        "error"
      );
    }
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
        <OutlinedButton type="submit" variant="contained" disabled={isLoading}>
          Send comment
        </OutlinedButton>

        <GhostButton onClick={onReset}>Clear input</GhostButton>
      </CommentsButtonWrapper>
    </StyledCommentForm>
  );
};
