import { FC, ReactNode } from "react";
import { MainContentWrap } from "@components/MainContent/style";
interface IChildrenType {
  children: ReactNode;
}

export const MainContent: FC<IChildrenType> = ({ children }) => {
  return <MainContentWrap>{children}</MainContentWrap>;
};
