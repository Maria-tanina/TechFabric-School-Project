import { BoxForSpinner, Spinner } from "@components/Spinner/style";
import { FC } from "react";

interface IFullHeightSpinnerProps {
  size: number;
}
export const FullHeightSpinner: FC<IFullHeightSpinnerProps> = ({ size }) => {
  return (
    <BoxForSpinner>
      <Spinner size={size} />
    </BoxForSpinner>
  );
};
