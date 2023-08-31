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
import { useAppSelector } from "../../store";
import CreatePostButton from "@components/CreatePostButton";
import ProfileInfo from "@components/ProfileInfo";
import {
  selectFullName,
  selectIsAuthor,
  selectIsLogin,
  selectIsSuperAdmin,
  selectUserInfo,
} from "@features/user/usersSelectors";

const Header = () => {
  const isLogin = useAppSelector(selectIsLogin);

  const userInfo = useAppSelector(selectUserInfo);

  const fullName = useAppSelector(selectFullName);

  const isAuthor = useAppSelector(selectIsAuthor);

  const isAdmin = useAppSelector(selectIsSuperAdmin);

  return (
    <HeaderWrapper>
      <HeaderLeftSide>
        <Logo />
        <SearchInput />
      </HeaderLeftSide>
      <HeaderRightSide>
        {(isAuthor || isAdmin) && <CreatePostButton />}
        {isLogin && userInfo ? (
          <ProfileInfo userName={fullName} subtitle={userInfo.userRole} />
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
