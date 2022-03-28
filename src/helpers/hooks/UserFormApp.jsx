import React from "react";
import { useForm } from "react-hook-form";

const UserFormApp = ({ mode }) => {
  const { register, handleSubmit, watch, formState } = useForm({
    mode: mode,
  });
  return {
    register,
    handleSubmit,
    watch,
    formState,
  };
};

export default UserFormApp;
