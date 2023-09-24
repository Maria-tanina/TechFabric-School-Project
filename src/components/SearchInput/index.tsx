import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle } from "@components/SearchInput/style";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { SEARCH_PATH } from "@constants/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  setAppliedValue,
  setSearchBy,
  setValue,
  TSearchBy,
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

  const [isInputEmpty, setInputEmpty] = useState(true);

  const searchBy = useAppSelector(selectSearchBy);

  interface ISearchOption {
    label: string;
    type: TSearchBy;
  }

  const tagsWithType: ISearchOption[] = tags.map((tag) => ({
    label: tag,
    type: "tags",
  }));

  const options: ISearchOption[] = [
    ...tagsWithType,
    {
      label: "title",
      type: "articles",
    },
    {
      label: "lord",
      type: "users",
    },
  ];

  useEffect(() => {
    if (!location.pathname.includes(SEARCH_PATH)) {
      dispatch(setValue(""));
    }
  }, [location]);

  const handleInputChange = (event: ChangeEvent<{}>, value: string) => {
    const inputValue = value.trim();
    dispatch(setValue(value));
    setInputEmpty(inputValue === "");
  };

  const handleOptionSelect = (value: string) => {
    navigate(`${SEARCH_PATH}/${searchBy}`);
    dispatch(setValue(value));
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
        dispatch(setValue(value));
        dispatch(setAppliedValue(value));
      } else {
        handleOptionSelect(value);
      }
    }
  };

  const handleSelectValueChange = (event: any, value: unknown) => {
    const valueWithType = value as ISearchOption;

    if (value) {
      if (options.find((option) => option.label === valueWithType.label)) {
        dispatch(setSearchBy(valueWithType.type));
        navigate(`${SEARCH_PATH}/${valueWithType.type}`);
        dispatch(setValue(valueWithType.label));
        dispatch(setAppliedValue(valueWithType.label));
      } else {
        navigate(`${SEARCH_PATH}/${searchBy}`);
        dispatch(setValue(value as string));
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
