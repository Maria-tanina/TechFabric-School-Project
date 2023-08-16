import { Link } from "react-router-dom";
import { ButtonStyle } from "@components/CreatePostButton/style";
import { CREATE_POST_PATH } from "@constants/paths";

export const CreatePostButton = () => {
  return (
    <ButtonStyle>
      <Link to={CREATE_POST_PATH}>Create a post</Link>
    </ButtonStyle>
  );
};

export default CreatePostButton;
