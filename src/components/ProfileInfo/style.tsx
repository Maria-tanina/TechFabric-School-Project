import styled from "styled-components";
import theme from "@styles/theme";


export const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
`
export const ProfileInfoAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AvatarFirstNameLetter = styled.div`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`
export const UserName = styled.div`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`
export const UserRole = styled.div`
  color: ${theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`
