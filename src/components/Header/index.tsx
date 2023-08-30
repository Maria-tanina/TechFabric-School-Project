import React from "react";
import {
  HeaderLeftSide,
  HeaderRightSide,
  HeaderWrapper,
} from "@components/Header/style";
import Logo from "@components/Logo";
import SearchInput from "@components/SearchInput";
import LogInButton from "@components/LogInButton";
import HeaderSignUpButton from "@components/HeaderSignUpButton";
import { useAppDispatch, useAppSelector } from "../../store";
import CreatePostButton from "@components/CreatePostButton";
import ProfileInfo from "@components/ProfileInfo";
import { GhostButton } from "@components/GhostButton";
import { logOut } from "@features/user/usersSlice";
import { Role } from "@constants/roles";

const Header = () => {
  const isLogin = useAppSelector((state) => state.users.isLogin);

  const userInfo = useAppSelector((state) => state.users.userInfo);

  const fullName = `${userInfo?.firstName} ${userInfo?.lastName}`;

  const isAuthor = userInfo?.userRole === Role.Author;

  const isAdmin = userInfo?.userRole === Role.SuperAdmin;

  const dispatch = useAppDispatch();

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <HeaderWrapper>
      <HeaderLeftSide>
        <Logo />
        <SearchInput />
      </HeaderLeftSide>
      <HeaderRightSide>
        {(isAuthor || isAdmin) && <CreatePostButton />}
        {isLogin && userInfo ? (
          <>
            <ProfileInfo userName={fullName} subtitle={userInfo.userRole} />
            <GhostButton $width="100px" onClick={handleLogOutClick}>
              Log out
            </GhostButton>
          </>
        ) : (
          <>
            <LogInButton />
            <HeaderSignUpButton />
          </>
        )}
      </HeaderRightSide>
    </HeaderWrapper>
  );
};

export default Header;
