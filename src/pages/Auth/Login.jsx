import React from "react";

const Login = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-20">
        <h1 className=" text-3xl font-bold">Login</h1>
        <form action="" className=" flex flex-col space-y-4 mt-10">
          <label>
            Username
            <input type="text" required placeholder="enter your name.." />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              placeholder="enter your password.."
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
