import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <input
      className={`shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
      id="username"
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
