import React from "react";

const Content = ({ children }) => {
  return (
    <div className="container mx-auto px-2 pt-5 sm:px-10 md:px-24">
      {children}
    </div>
  );
};

export default Content;
