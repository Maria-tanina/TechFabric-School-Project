import { LeftSidebarWrap } from "@components/LeftSidebar/style";
import { FC, ReactNode } from "react";
interface IChildrenType {
  children: ReactNode;
}

export const LeftSidebar: FC<IChildrenType> = ({ children }) => {
  return <LeftSidebarWrap>{children}</LeftSidebarWrap>;
};
