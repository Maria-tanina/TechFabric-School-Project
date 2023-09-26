import {
  AvatarFirstNameLetter,
  ProfileInfoAvatar,
  ProfileInfoWrapper,
  UserName,
  UserRole,
} from "./style";
import { FC } from "react";
import { IProfileInfo } from "./types";

export const ProfileInfo: FC<IProfileInfo> = ({
  userName,
  subtitle,
  onClick,
}) => {
  return (
    <ProfileInfoWrapper onClick={onClick}>
      <ProfileInfoAvatar>
        <AvatarFirstNameLetter>{userName.slice(0, 1)}</AvatarFirstNameLetter>
      </ProfileInfoAvatar>
      <div>
        <UserName>{userName}</UserName>
        <UserRole>{subtitle}</UserRole>
      </div>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
