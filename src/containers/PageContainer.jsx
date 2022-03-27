import React from "react";
import Nav from "../components/Nav";
import Content from "../components/shared/Content";

const PageContainer = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <Content>{children}</Content>
    </>
  );
};

export default PageContainer;
