import React from "react";
import PageContainer from "../../containers/PageContainer";
import { useForm } from "react-hook-form";
import UserFormApp from "../../helpers/hooks/UserFormApp";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = UserFormApp({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <PageContainer clasName={"bg-purple-900	h-screen"}>
      <div className="flex justify-center items-center pt-11">
        <div className="w-full max-w-xl">
          <form
            className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="my-3 text-center font-semibold">
              <span className="text-gray-400 text-3xl">Login</span>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 5,
                    message: "Username must be at least 5 characters",
                  },
                })}
                className={`shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.username ? "border-red-500 " : ""
                }`}
                id="username"
                type="text"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              {/*
            < input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
           
            */}
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                })}
                className={`shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                type="password"
                placeholder="******************"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div class="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
