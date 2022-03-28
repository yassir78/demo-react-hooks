import React from "react";
import Nav from "../components/shared/Nav";
import Content from "../components/shared/Content";

const PageContainer = ({ children, clasName }) => {
  return (
    <>
      <Nav />
      <Content className={clasName}>{children}</Content>
    </>
  );
};

export default PageContainer;
