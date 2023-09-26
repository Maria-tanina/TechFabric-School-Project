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
import { selectIsLogin } from "@features/user/usersSelectors";
import {
  selectUserFullName,
  selectUserInfoData,
  selectUserIsAuthor,
} from "@services/authSelectors";
import { ProfileInfoDropdown } from "@components/ProfileInfoDropdown";

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
          <ProfileInfoDropdown fullName={fullName} role={userInfo.userRole} />
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
