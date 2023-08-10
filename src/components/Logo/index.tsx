import {LogoStyle} from "@components/Logo/style";

interface ILogoProps {
    isFooter?: boolean;
}

const Logo = ({isFooter = false}: ILogoProps) => {
    return (
        <LogoStyle isFooter={isFooter} to="/">
            POWER<span>UP</span>
        </LogoStyle>
    );
};

export default Logo;
