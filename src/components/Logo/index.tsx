import {LogoStyle} from "@components/Logo/style";
import {HOME_PATH} from "@constants/paths";


const Logo = () => {
    return (
        <>
             <LogoStyle to={HOME_PATH} >
                POWER<span>UP</span>
             </LogoStyle>
        </>

    );
};

export default Logo;
