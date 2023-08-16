import React, { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { LayoutWrapper, MainContent } from "@components/Layout/style";

interface IChildrenType {
  children: ReactNode;
}

const Layout: React.FC<IChildrenType> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
