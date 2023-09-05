import { FilePreviewWrapper, StyledIconButton } from "./style";
import ClearIcon from "@mui/icons-material/Clear";
import { FC } from "react";

interface IFilePreviewProps {
  urls: string[];
  files: File[];
  clearSelectedFiles: () => void;
}

export const FilePreview: FC<IFilePreviewProps> = ({
  urls,
  files,
  clearSelectedFiles,
}) => {
  return (
    <>
      {urls.map((url, i) => {
        const filename = files[i].name;
        return (
          <FilePreviewWrapper key={url}>
            <img src={url} width={70} height={70} key={i} alt={filename} />
            <StyledIconButton size="small" onClick={clearSelectedFiles}>
              <ClearIcon fontSize="inherit" />
            </StyledIconButton>
          </FilePreviewWrapper>
        );
      })}
    </>
  );
};
