import styled from "styled-components";
import { Skeleton } from "@mui/material";

export const SkeletonArticle = styled.article`
  max-width: 1220px;
  width: 100%;
  height: 523px;
  transform: scale(1);
  > .MuiSkeleton-root > * {
    visibility: visible;
  }
  .MuiSkeleton-root {
    transform: scale(1);
    width: 100%;
  }
`;
export const UserInfoWrap = styled.div`
  display: flex;
  gap: 12px;
`;
export const UserNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const FavoritesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const StyledBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FavoritesButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledArticleCard = styled(Skeleton)`
  &.MuiSkeleton-root {
    max-width: 1220px;
    height: 523px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const SkeletonImage = styled(Skeleton)`
  &.MuiSkeleton-root {
    height: 300px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px 8px 0 0;
  }
`;

export const SkeletonUserAvatar = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    visibility: visible;
  }
`;

export const SkeletonUserInfo = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 130px;
    height: 15px;
    visibility: visible;
  }
`;

export const SkeletonTitle = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 100%;
    height: 48px;
    margin: 20px 0 30px 0;
    visibility: visible;
  }
`;

export const SkeletonTag = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 46px;
    height: 17px;
    visibility: visible;
  }
`;

export const SkeletonAddFavoritesText = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 118px;
    height: 24px;
    visibility: visible;
  }
`;
export const SkeletonAddFavoritesIcon = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 22px;
    height: 22px;
    visibility: visible;
  }
`;

export const SkeletonHeartIcon = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 20px;
    height: 20px;
    visibility: visible;
  }
`;
export const StyledCardContent = styled(Skeleton)`
  &.MuiSkeleton-root {
    height: 223px;
    max-width: 100%;
    padding: 25px 55px;
    border-radius: 0 0 8px 8px;
    background-color: rgb(255, 255, 255);
    border-right: 2px solid rgb(212, 212, 212);
    border-bottom: 2px solid rgb(212, 212, 212);
    border-left: 2px solid rgb(212, 212, 212);
  }
`;
