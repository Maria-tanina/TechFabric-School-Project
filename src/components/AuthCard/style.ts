import styled from "styled-components";

export const AuthWrapper = styled.div<{ $width?: string }>(
  ({ $width }) => `
  max-width: ${$width || "1080px"};
  margin: 0 auto;
  padding: 12px 0;
`
);

export const StyledCard = styled.div(
  ({ theme: { colors, paddings, media } }) => `
  padding: 52px 90px;
  border-radius: 8px;
  border: 2px solid ${colors.strokeGray};
  background: ${colors.white};
  max-width: 1080px;
  margin: 0 auto;
  ${media.tablet}{
    padding: ${paddings.formPadding};
  }
`
);

export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
