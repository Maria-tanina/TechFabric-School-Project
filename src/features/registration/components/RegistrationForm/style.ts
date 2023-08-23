import styled from "styled-components";
import { StyledForm } from "@components/Form";
import { Alert } from "@mui/material";

export const StyledRegistrationForm = styled(StyledForm)`
  gap: 28px;
  width: 100%;
  margin-bottom: 24px;
`;

export const AlertStyle = styled(Alert)`
  position: fixed;
  top: 30px;
  right: 30px;
`;
