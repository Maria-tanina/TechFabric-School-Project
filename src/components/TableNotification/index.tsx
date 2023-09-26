import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
  StyledErrorNotification,
  StyledMessage,
  StyledStartNotification,
  StyledTypography,
} from "./style";
import { FC, ReactNode } from "react";
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

export const TableStartSearch: FC<{ message: string; icon: ReactNode }> = ({
  message,
  icon,
}) => {
  return (
    <StyledStartNotification>
      {icon}
      <StyledTypography>{message}</StyledTypography>
    </StyledStartNotification>
  );
};
