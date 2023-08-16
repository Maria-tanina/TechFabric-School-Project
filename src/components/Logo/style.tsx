import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoStyle = styled(Link)<{ $isFooter: boolean }>(
  ({ theme: { colors, fontSizes }, $isFooter }) => `
  font-size: ${fontSizes.logo};
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  line-height: 36px;
  color: ${$isFooter ? colors.white : colors.black};

  & span {
    color: ${colors.main};
`
);
