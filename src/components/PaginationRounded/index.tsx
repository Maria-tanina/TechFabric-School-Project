import { PaginationProps } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { FC } from "react";
import { StyledPagination } from "@components/PaginationRounded/style";

export const PaginationRounded: FC<PaginationProps> = (props) => {
  return (
    <Stack spacing={2}>
      <StyledPagination
        variant="outlined"
        shape="rounded"
        {...props}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: WestIcon, next: EastIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};
