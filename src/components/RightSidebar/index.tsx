import { FC, ReactNode } from "react";
import { RightSidebarWrap } from "@components/RightSidebar/style";
interface IChildrenType {
  children: ReactNode;
}

export const RightSidebar: FC<IChildrenType> = ({ children }) => {
  return <RightSidebarWrap>{children}</RightSidebarWrap>;
};
