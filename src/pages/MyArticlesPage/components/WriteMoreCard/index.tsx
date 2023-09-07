import { CREATE_POST_PATH } from "@constants/paths";
import { Grid } from "@mui/material";
import { StyledWriteMoreCard, StyledWriteMoreLink } from "./style";

export const WriteMoreCard = () => {
  return (
    <Grid item sm={6} md={6} lg={6} xl={4}>
      <StyledWriteMoreCard>
        <StyledWriteMoreLink to={CREATE_POST_PATH}>
          Write more +
        </StyledWriteMoreLink>
      </StyledWriteMoreCard>
    </Grid>
  );
};
