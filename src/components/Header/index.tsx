import React from "react";
import {HeaderLeftSide, HeaderRightSide, HeaderWrapper} from "@components/Header/style";
import Logo from "@components/Logo";
import SearchInput from "@components/SearchInput";
import LogInButton from "@components/LogInButton";
import HeaderSignUpButton from "@components/HeaderSignUpButton";



const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeftSide>
                <Logo/>
                <SearchInput/>
            </HeaderLeftSide>
            <HeaderRightSide>
                <LogInButton/>
                <HeaderSignUpButton/>
                {/*<CreatePostButton/>*/}
                {/*<ProfileInfo/>*/}
            </HeaderRightSide>
        </HeaderWrapper>


    );
};

export default Header;
