import Editor from "./components/Editor";
import { AuthorRules } from "@components/AuthorRules";
import { CreatePostWrapper } from "@pages/CreatePostPage/style";

const CreatePostPage = () => {
  return (
    <CreatePostWrapper>
      <Editor />
      <AuthorRules />
    </CreatePostWrapper>
  );
};

export default CreatePostPage;
