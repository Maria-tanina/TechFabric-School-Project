import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputStyle } from "@components/SearchInput/style";

export const SearchInput = () => {
  return (
    <SearchInputStyle
      placeholder="Search something..."
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
