import { Link } from "react-router-dom";
import { StyledTag } from "@components/ArticleTag/style";

interface ITagProps {
  tag: string;
  link: string;
}

export const ArticleTag = ({ tag, link }: ITagProps) => {
  return (
    <StyledTag>
      <Link to={link}>{tag}</Link>
    </StyledTag>
  );
};
