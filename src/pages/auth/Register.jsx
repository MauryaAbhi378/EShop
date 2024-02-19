import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import registerImg from "../../assets/register.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      {/* Image */}
      <div className="">
        <img src={registerImg} alt="login-image" width={"600px"} />
      </div>

      <div>
        {/* Text */}
        <h1 className="font-bold text-4xl mb-8">Create an account</h1>

        {/* Form */}
        <form className="flex flex-col">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="ring-1 ring-black mb-6 rounded-md p-2 font-semibold outline-none bg-gray-100 placeholder:text-slate-500 placeholder:font-semibold"
          />
          <div className="flex relative">
            <input
              type={passwordType}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full ring-1 ring-black mb-6 rounded-md p-2 font-semibold outline-none bg-gray-100 placeholder:text-slate-500 placeholder:font-semibold"
            />
            {passwordType === "password" ? (
              <IoIosEyeOff
                size={"20px"}
                className="absolute left-[270px] top-[10px] cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <IoIosEye
                size={"20px"}
                className="absolute left-[270px] top-[10px] cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>
          <button className="w-full p-2 bg-blue-500 font-semibold rounded-md mb-8">Create an account</button>
        </form>

        <div className="flex items-center">
          <span className="whitespace-nowrap text-slate-500 font-semibold">Already have an account?</span>
          <Link to={"/login"} className="flex items-center ml-6 font-semibold">
            <CiLogin />  Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
