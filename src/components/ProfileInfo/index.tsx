import {
    AvatarFirstNameLetter,
    ProfileInfoAvatar,
    ProfileInfoWrapper,
    UserName,
    UserRole
} from "@components/ProfileInfo/style";


export const ProfileInfo = () => {
    return (
        <ProfileInfoWrapper>
            <ProfileInfoAvatar>
                <AvatarFirstNameLetter>
                    H
                </AvatarFirstNameLetter>
            </ProfileInfoAvatar>
            <div>
                <UserName>Harold Painless</UserName>
                <UserRole>Admin</UserRole>
            </div>
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;
