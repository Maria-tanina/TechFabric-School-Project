import { Link } from "react-router-dom";
import { StyledTag } from "@components/ArticleTag/style";
import { useAppDispatch } from "../../store";
import { setValue } from "@features/searchArticle/searchArticleSlice";
import { useState } from "react";

interface ITagProps {
  tag: string;
  link: string;
}

export const ArticleTag = ({ tag, link }: ITagProps) => {
  const dispatch = useAppDispatch();
  const [selectedTag, setSelectedTag] = useState("");
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    dispatch(setValue(tag));
  };
  return (
    <StyledTag>
      <Link to={link} onClick={() => handleTagClick(tag)}>
        {tag}
      </Link>
    </StyledTag>
  );
};
