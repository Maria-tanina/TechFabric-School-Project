import styled from "styled-components";

const StyledButton = styled.button(({theme: {paddings, fonts, fontSizes}}) =>`
  border-radius: 8px;
  font-family: ${fonts.main};
  font-size: ${fontSizes.button};
  font-weight: 500;
  padding: ${paddings.buttonPadding};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  width: 100%;
  a {
    color: inherit;
    display: block;
    width: 100%;
  }
`);

export const DarkButton = styled(StyledButton)(({theme: {colors,fonts}}) =>`
  font-family: ${fonts.signUpButton};
  color: ${colors.white};
  background-color: ${colors.graphite};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 0px rgba(0, 0, 0, 0.08);
   &:hover {
    background-color: ${colors.black};
    color: ${colors.white}
  }
`);

export const GhostButton = styled(StyledButton)(({theme: {colors}}) =>`
  color: ${colors.graphite};
  background-color: transparent;
   &:hover {
    background-color: rgba(254, 222, 36, 0.1);
    color: ${colors.main}
  }
`);

