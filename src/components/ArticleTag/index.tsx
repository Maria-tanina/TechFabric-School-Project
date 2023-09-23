import { Link } from "react-router-dom";
import { StyledTag } from "@components/ArticleTag/style";
import { useAppDispatch } from "../../store";
import {
  setAppliedValue,
  setSearchBy,
  setValue,
} from "@features/searchArticle/searchArticleSlice";
import { SEARCH_PATH } from "@constants/paths";

interface ITagProps {
  tag: string;
}

export const ArticleTag = ({ tag }: ITagProps) => {
  const dispatch = useAppDispatch();

  const handleTagClick = (tag: string) => {
    dispatch(setSearchBy("tags"));
    dispatch(setValue(tag));
    dispatch(setAppliedValue(tag));
  };

  return (
    <StyledTag>
      <Link to={`${SEARCH_PATH}/tags`} onClick={() => handleTagClick(tag)}>
        {tag}
      </Link>
    </StyledTag>
  );
};
