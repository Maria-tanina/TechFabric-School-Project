import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle } from "@components/SearchInput/style";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  KeyboardEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setAppliedValue,
  setValue,
} from "@features/searchArticle/searchArticleSlice";
import {
  selectSearchBy,
  selectValue,
} from "@features/searchArticle/searchArticleSelectors";
import { selectTags } from "@features/tags/tagsSelectors";

export const SearchInput = () => {
  const navigate = useNavigate();

  const tags = useAppSelector(selectTags);

  const location = useLocation();

  const dispatch = useAppDispatch();

  const inputValue = useAppSelector(selectValue);

  const [options, setOptions] = useState<string[]>([]);

  const [isInputEmpty, setInputEmpty] = useState(true);

  const searchBy = useAppSelector(selectSearchBy);

  useEffect(() => {
    if (!location.pathname.includes(SEARCH_PATH)) {
      dispatch(setValue(""));
    }
  }, [location]);

  const handleInputChange = (event: ChangeEvent<{}>, value: string) => {
    const inputValue = value.trim();
    dispatch(setValue(value));
    if (inputValue.startsWith("#") && tags) {
      const matchingTags = tags?.filter((tagObject) =>
        tagObject.includes(inputValue)
      );
      if (matchingTags.length > 0) {
        setOptions(matchingTags.map((tagObj) => tagObj));
      } else {
        setOptions([]);
      }
    } else {
      setOptions([]);
    }
    setInputEmpty(inputValue === "");
  };

  const handleOptionSelect = (value: string) => {
    navigate(`${SEARCH_PATH}/${searchBy}`);
    dispatch(setValue(value));
    dispatch(setAppliedValue(value));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" && inputValue.trim().length >= 3) {
      handleOptionSelect(inputValue.trim());
    }
  };

  const handleSelectValueChange = (event: SyntheticEvent, value: unknown) => {
    if (typeof value === "string" && value.trim().length >= 3) {
      handleOptionSelect(value.trim());
    }
  };

  return (
    <SearchInputStyle
      selectOnFocus
      freeSolo
      disablePortal
      clearOnBlur
      options={options}
      value={inputValue}
      onKeyDown={handleKeyDown}
      onInputChange={handleInputChange}
      onChange={handleSelectValueChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search something..."
          value={inputValue}
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <InputAdornment position="end">
                {isInputEmpty ? <SearchIcon /> : null}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchInput;
