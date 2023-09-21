import {
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle } from "@components/SearchInput/style";
import {useLocation, useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import { SEARCH_PATH } from "@constants/paths";
import { useAppSelector } from "../../store";
import { selectTags } from "@features/tags/tagsSelectors";

export const SearchInput = () => {
  const navigate = useNavigate();
  const tags = useAppSelector(selectTags);
  const [options, setOptions] = useState<string[]>([]);
  const [isInputEmpty, setInputEmpty] = useState(true);
  const location = useLocation();

    useEffect(() => {
        setInputEmpty(true);
    }, [location.pathname]);

  const handleInputChange = (
    event: ChangeEvent<{}>,
    value: string,
  ) => {
    const inputValue = value;
    if (inputValue.startsWith("#")) {
      const matchingTags = tags.filter((tagObject) =>
        tagObject.tagName.includes(inputValue)
      );
      if (matchingTags.length > 0) {
        setOptions(matchingTags.map((tagObj) => tagObj.tagName));
      } else {
        setOptions([]);
      }
    } else {
      setOptions([]);
    }
      setInputEmpty(inputValue === "");
  };

  const handleOptionSelect = (value: string) => {
    navigate(`${SEARCH_PATH}/tags/${encodeURIComponent(value)}`);
  };
  return (
    <SearchInputStyle
      freeSolo
      disableClearable
      options={options}
      onInputChange={handleInputChange}
      onChange={(event, value) => {
        if (typeof value === "string") {
          handleOptionSelect(value);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search something..."
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
