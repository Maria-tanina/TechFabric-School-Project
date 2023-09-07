import styled from "styled-components";

export const StyledTopEditor = styled.div(
  ({ theme: { colors } }) => `
  border: 2px solid ${colors.strokeGray};
  background-color: ${colors.white};
  border-bottom: none;
  padding: 32px;
  min-height: 346px;
  border-radius: 8px 8px 0px 0px;
  
  .MuiAutocomplete-popper {
    ul li:first-child {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px; 
      color: ${colors.black};
      opacity: 1;
      border-bottom: 2px solid ${colors.strokeGray};
    }
  }
`
);

export const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: start;
  min-height: 75px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SecondText = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 60%;
`
);

export const HiddenFileInput = styled.input`
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  right: 0;
`;
