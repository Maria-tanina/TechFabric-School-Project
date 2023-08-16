import { LogoStyle } from "@components/Logo/style";
import { HOME_PATH } from "@constants/paths";

interface ILogoProps {
  isFooter?: boolean;
}

const Logo = ({ isFooter = false }: ILogoProps) => {
  return (
    <LogoStyle $isFooter={isFooter} to={HOME_PATH}>
      POWER<span>UP</span>
    </LogoStyle>
  );
};

export default Logo;
