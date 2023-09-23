import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const StyledMessage = styled.div(
  ({ theme: { colors, fonts } }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  width: 100%;
  padding: 45px 0;
  
  svg {
    font-size: 60px;
    path {
      fill: ${colors.gray}
    }
  }
`
);

export const StyledTypography = styled(Typography)(
  ({ theme: { colors, fonts } }) => `
  &.MuiTypography-root {
    text-align: center;
    font-size: 16px;
    color: ${colors.gray};
    font-weight: 700;
    letter-spacing: 0.01071em;
    font-family: ${fonts.main}
  }
`
);

export const StyledErrorNotification = styled(StyledMessage)`
  position: relative;
  margin: auto;
  padding: 50px 0;
`;

export const StyledStartNotification = styled(StyledMessage)`
  position: relative;
  margin: auto;
  min-height: 415px;
  padding: 100px 0;
`;
