import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle } from "@components/SearchInput/style";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNotification } from "@hooks/useNotification";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setAppliedValue,
  setSearchBy,
  setValue,
} from "@features/searchArticle/searchArticleSlice";
import {
  selectSearchBy,
  selectValue,
} from "@features/searchArticle/searchArticleSelectors";
import { selectTags } from "@features/tags/tagsSelectors";
import { ISearchOption } from "./types";
import { selectTopAuthorsData } from "@features/authors/authorsSelectors";

export const SearchInput = () => {
  const { showNotification } = useNotification();

  const navigate = useNavigate();

  const tags = useAppSelector(selectTags);

  const authors = useAppSelector(selectTopAuthorsData);

  const location = useLocation();

  const dispatch = useAppDispatch();

  const inputValue = useAppSelector(selectValue);

  const [isInputEmpty, setInputEmpty] = useState(true);

  const searchBy = useAppSelector(selectSearchBy);

  useEffect(() => {
    if (!location.pathname.includes(SEARCH_PATH)) {
      dispatch(setValue(""));
      dispatch(setAppliedValue(""));
      setInputEmpty(true);
    }
  }, [location]);

  const tagsWithType: ISearchOption[] = useMemo(() => {
    return tags.map((tag) => ({
      label: tag,
      type: "tags",
    }));
  }, [tags]);

  const authorsWithType: ISearchOption[] = useMemo(() => {
    return authors.map((author) => ({
      label: `${author.firstName} ${author.lastName}`,
      type: "users",
    }));
  }, [authors]);

  const options: ISearchOption[] = inputValue
    ? [...tagsWithType, ...authorsWithType]
    : [...tagsWithType.slice(0, 4)];

  const handleInputChange = (event: ChangeEvent<{}>, value: string) => {
    const inputValue = value.trim();
    dispatch(setValue(value));
    setInputEmpty(inputValue === "");
  };

  const handleOptionSelect = (value: string) => {
    navigate(`${SEARCH_PATH}/${searchBy}`);
    dispatch(setAppliedValue(value));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e: any) => {
    const value = e.target.value as string;
    const index = options.findIndex((option) => option.label.includes(value));

    if (e.key === "Enter" && inputValue.trim().length >= 3) {
      if (index >= 0) {
        const typeOfOption = options[index].type;
        dispatch(setSearchBy(typeOfOption));
        navigate(`${SEARCH_PATH}/${typeOfOption}`);
        dispatch(setAppliedValue(value));
      } else {
        handleOptionSelect(value);
      }
    } else if (e.key === "Enter" && inputValue.trim().length < 3) {
      showNotification(
        "Search query must contain at least 3 characters",
        "error"
      );
    }
  };

  const handleSelectValueChange = (event: any, value: unknown) => {
    const valueWithType = value as ISearchOption;

    if (value) {
      if (options.find((option) => option.label === valueWithType.label)) {
        dispatch(setSearchBy(valueWithType.type));
        navigate(`${SEARCH_PATH}/${valueWithType.type}`);
        dispatch(setAppliedValue(valueWithType.label));
      } else {
        navigate(`${SEARCH_PATH}/${searchBy}`);
        dispatch(setAppliedValue(value as string));
      }
    }
  };

  return (
    <SearchInputStyle
      selectOnFocus
      freeSolo
      disablePortal
      options={options}
      inputValue={inputValue}
      groupBy={(option) => {
        const category = (option as ISearchOption).type;
        return category.charAt(0).toUpperCase() + category.slice(1);
      }}
      onKeyDown={handleKeyDown}
      onInputChange={handleInputChange}
      value={inputValue}
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
