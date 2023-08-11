import React from "react";
import {HeaderLeftSide, HeaderRightSide, HeaderWrapper} from "@components/Header/style";
import Logo from "@components/Logo";
import SearchInput from "@components/SearchInput";
import LogInButton from "@components/LogInButton";
import ProfileInfo from "@components/ProfileInfo";


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeftSide>
                <Logo/>
                <SearchInput/>
            </HeaderLeftSide>
            <HeaderRightSide>
                <LogInButton/>
                <LogInButton/>
                <ProfileInfo/>
            </HeaderRightSide>
        </HeaderWrapper>


    );
};

export default Header;
