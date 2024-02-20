import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import loginImg from "../../assets/login.png";
import googleImg from "../../assets/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordtype, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const togglePassword = () => {
    if (passwordtype === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const singInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="img">
          <img src={loginImg} alt="login-image" width={"600px"} />
        </div>

        <form className="login_page ml-4" onSubmit={signIn}>
          {/* Text */}
          <div className="">
            <h1 className="font-semibold text-2xl mb-3">Welcome!</h1>
            <Link
              to={"/register"}
              className="border-b-[2px] border-black font-bold"
            >
              Create a free account
            </Link>
            <span className="text-gray-800"> or log in to get started</span>
          </div>

          {/* Input field */}
          <div className="inputs flex flex-col mt-4">
            <label className="font-semibold mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ring-1 ring-black p-2 rounded-md mb-6 outline-none bg-gray-100 placeholder:text-slate-500 placeholder:font-semibold"
            />
            <label className="font-semibold mb-2">Password</label>
            <div className="flex relative">
              <input
                type={passwordtype}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full ring-1 ring-black p-2 rounded-md mb-6 outline-none bg-gray-100 placeholder:text-slate-500 placeholder:font-semibold"
              />
              {passwordtype === "password" ? (
                <IoIosEyeOff
                  size={"20px"}
                  className="absolute left-[308px] top-[10px]"
                  onClick={togglePassword}
                />
              ) : (
                <IoIosEye
                  size={"20px"}
                  className="absolute left-[308px] top-[10px]"
                  onClick={togglePassword}
                />
              )}
            </div>

            {/* Forgot Password */}
            <div className="mb-4">
              <Link
                to={"/reset"}
                className="border-b-[2px] border-black font-bold ml-52"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md text-center font-semibold mb-4"
            >
              Login
            </button>
          </div>

          {/* Google Login*/}
          <div
            className="flex w-full p-[3px] rounded-md justify-center font-semibold border-[3px] border-black cursor-pointer"
            onClick={singInGoogle}
          >
            <img src={googleImg} alt="google-img" width={"20px"} />{" "}
            <span>Login with google</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
