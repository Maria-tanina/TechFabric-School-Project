import {
  FavoritesButtons,
  FavoritesWrapper,
  SkeletonAddFavoritesIcon,
  SkeletonAddFavoritesText,
  SkeletonArticle,
  SkeletonHeartIcon,
  SkeletonImage,
  SkeletonTag,
  SkeletonTitle,
  SkeletonUserAvatar,
  SkeletonUserInfo,
  StyledArticleCard,
  StyledBottomWrapper,
  StyledCardContent,
  StyledTagsWrapper,
  UserInfoWrap,
  UserNameWrap,
} from "@components/SkeletonCard/style";

export const SkeletonCard = () => {
  return (
    <SkeletonArticle>
      <StyledArticleCard>
        <SkeletonImage animation="wave" variant="rectangular" />
        <StyledCardContent animation={false}>
          <UserInfoWrap>
            <SkeletonUserAvatar animation="wave" />
            <UserNameWrap>
              <SkeletonUserInfo animation="wave" variant="text" />
              <SkeletonUserInfo animation="wave" variant="text" />
            </UserNameWrap>
          </UserInfoWrap>
          <SkeletonTitle />

          <StyledBottomWrapper>
            <StyledTagsWrapper>
              <SkeletonTag variant="text" />
              <SkeletonTag variant="text" />
              <SkeletonTag variant="text" />
            </StyledTagsWrapper>
            <FavoritesButtons>
              <FavoritesWrapper>
                <SkeletonAddFavoritesText variant="text" />
                <SkeletonAddFavoritesIcon variant="text" />
              </FavoritesWrapper>
              <SkeletonHeartIcon variant="circular" />
            </FavoritesButtons>
          </StyledBottomWrapper>
        </StyledCardContent>
      </StyledArticleCard>
    </SkeletonArticle>
  );
};
