import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLogin } from "react-icons/ci";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import registerImg from "../../assets/register.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, cSetPasswordType] = useState("password");
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const ctogglePassword = () => {
    if (cpasswordType === "password") {
      cSetPasswordType("text");
    } else {
      cSetPasswordType("password");
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password enter is wrong");
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        toast.success("Register Successfully");
        navigate("/login");
        console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        {/* Image */}
        <div className="">
          <img src={registerImg} alt="login-image" width={"600px"} />
        </div>

        <div>
          {/* Text */}
          <h1 className="font-bold text-4xl mb-8">Create an account</h1>

          {/* Form */}
          <form className="flex flex-col" onSubmit={registerUser}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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

            <div className="flex relative">
              <input
                type={cpasswordType}
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full ring-1 ring-black mb-6 rounded-md p-2 font-semibold outline-none bg-gray-100 placeholder:text-slate-500 placeholder:font-semibold"
              />
              {passwordType === "password" ? (
                <IoIosEyeOff
                  size={"20px"}
                  className="absolute left-[270px] top-[10px] cursor-pointer"
                  onClick={ctogglePassword}
                />
              ) : (
                <IoIosEye
                  size={"20px"}
                  className="absolute left-[270px] top-[10px] cursor-pointer"
                  onClick={togglePassword}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 font-semibold rounded-md mb-8"
            >
              Create an account
            </button>
          </form>

          <div className="flex items-center">
            <span className="whitespace-nowrap text-slate-500 font-semibold">
              Already have an account?
            </span>
            <Link
              to={"/login"}
              className="flex items-center ml-6 font-semibold"
            >
              <CiLogin /> Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
