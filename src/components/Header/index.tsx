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
import { selectIsLogin } from "@features/user/usersSelectors";
import {
  selectUserFullName,
  selectUserInfoData,
  selectUserIsAuthor,
} from "@services/authSelectors";

const Header = () => {
  const userInfo = useAppSelector(selectUserInfoData);

  const isLogin = useAppSelector(selectIsLogin);

  const fullName = useAppSelector(selectUserFullName);

  const isAuthor = useAppSelector(selectUserIsAuthor);

  return (
    <HeaderWrapper>
      <HeaderLeftSide>
        <Logo />
        <SearchInput />
      </HeaderLeftSide>
      <HeaderRightSide>
        {isLogin && isAuthor && <CreatePostButton />}
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
