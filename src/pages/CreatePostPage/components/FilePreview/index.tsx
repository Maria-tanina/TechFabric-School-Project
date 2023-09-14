import { FilePreviewWrapper, StyledIconButton } from "./style";
import ClearIcon from "@mui/icons-material/Clear";
import { FC } from "react";

interface IFilePreviewProps {
  url: string;
  clearSelectedFiles: () => void;
}

export const FilePreview: FC<IFilePreviewProps> = ({
  url,
  clearSelectedFiles,
}) => {
  return (
    <FilePreviewWrapper key={url}>
      <img src={url} height={140} key={url} alt="preview" />
      <StyledIconButton size="small" onClick={clearSelectedFiles}>
        <ClearIcon fontSize="inherit" />
      </StyledIconButton>
    </FilePreviewWrapper>
  );
};
