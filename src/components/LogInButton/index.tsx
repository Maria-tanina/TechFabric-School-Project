import {Link} from "react-router-dom";
import {LogInButtonStyle} from "@components/LogInButton/style";


export const LogInButton = () => {
    return (
        <LogInButtonStyle>
            <Link to="/login">
                Log In
            </Link>
        </LogInButtonStyle>
    );
};

export default LogInButton;
