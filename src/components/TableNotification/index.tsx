import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  StyledErrorNotification,
  StyledMessage,
  StyledTypography,
} from "./style";
import { FC } from "react";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";

export const TableFetchError: FC<{ message: string }> = ({ message }) => {
  return (
    <StyledErrorNotification>
      <ErrorOutlineIcon />
      <StyledTypography>{message}</StyledTypography>
    </StyledErrorNotification>
  );
};

export const TableSearchError: FC<{ message: string }> = ({ message }) => {
  return (
    <tr>
      <td>
        <StyledMessage>
          <FindInPageOutlinedIcon />
          <StyledTypography>{message}</StyledTypography>
        </StyledMessage>
      </td>
    </tr>
  );
};
