import styled from "styled-components";
import { StyledForm } from "@components/Form";

export const StyledLoginForm = styled(StyledForm)`
  gap: 28px;
  margin-bottom: 36px;
`;

export const StyledUnderlineText = styled.div(
  ({ theme: { colors } }) => `
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  margin-top: -12px;
  display: inline-block;
  
  & a {
    transition: all 0.3s;
    text-decoration: underline;
    text-decoration-color: ${colors.black};
  }
  
  & a:hover{
    color: ${colors.main};
    text-decoration-color: ${colors.main};
  }
`
);
