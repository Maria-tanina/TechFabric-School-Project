import styled from "styled-components";

export const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;
export const ProfileInfoAvatar = styled.div(
  ({ theme: { colors } }) => `
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`
);
export const AvatarFirstNameLetter = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`
);
export const UserName = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`
);
export const UserRole = styled.div(
  ({ theme: { colors } }) => `
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`
);
