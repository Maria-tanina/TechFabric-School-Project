import styled from "styled-components";
import {
  CustomSelect,
  StyledFormControl,
  StyledLabel,
} from "@components/Select";

export const StyledOutlinedSelect = styled(CustomSelect)(
  ({ theme: { colors }, open, value }) => `
  &.MuiInputBase-root.MuiInputBase-formControl {
    color: ${open || value ? colors.black : colors.gray};
    border: 2px solid ${
      value ? colors.black : open ? colors.main : colors.strokeGray
    };
  }
`
);

export const OutlinedLabel = styled(StyledLabel)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    font-size: 15px;
  }
`;

export const OutlinedFormControl = styled(StyledFormControl)`
  max-width: 40%;
  width: 100%;
`;
