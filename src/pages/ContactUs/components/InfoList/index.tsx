import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { InfoListItem, StyledInfoList } from "./style";

export const InfoList = () => {
  return (
    <StyledInfoList>
      <InfoListItem>
        <LocalPhoneIcon />
        Phone:
        <a href="tel:+20227376756">+2(02) 2737 6756</a>
      </InfoListItem>

      <InfoListItem>
        <MailOutlineIcon />
        Email:
        <a href="mailto: hamdy.mostafa@group.com">hamdy.mostafa@group.com</a>
      </InfoListItem>
      <InfoListItem>
        <LocationOnOutlinedIcon />
        Address:
        <span>18 Mahmoud Azmy Street, Zamalek, Cairo, Egypt.</span>
      </InfoListItem>
    </StyledInfoList>
  );
};
