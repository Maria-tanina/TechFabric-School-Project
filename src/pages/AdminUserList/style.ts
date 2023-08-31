import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const AdminUserListWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  width: 100%;
`;

export const StyledUserListPaper = styled(Paper)`
  width: 100%;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  min-height: 450px;
`;
