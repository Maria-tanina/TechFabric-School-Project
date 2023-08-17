import { OutlinedButton } from "@components/OutlinedButton";
import { Link } from "react-router-dom";
import img from "./404.png";
import { Grid } from "@mui/material";
import {
  StyledImageWrapper,
  StyledResponsiveImage,
} from "@pages/NotFound/style";

const NotFound = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <StyledImageWrapper>
        <StyledResponsiveImage src={img} alt="Not found error" />
      </StyledImageWrapper>

      <OutlinedButton $width="150px">
        <Link to="/">Go back home</Link>
      </OutlinedButton>
    </Grid>
  );
};

export default NotFound;
