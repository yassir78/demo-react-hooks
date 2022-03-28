import React from "react";

const Content = ({ children, className }) => {
  return (
    <div
      className={`container  mx-auto px-2 pt-5 mt-10 sm:px-10 md:px-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Content;
