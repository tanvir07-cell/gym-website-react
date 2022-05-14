import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaGoogle } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import auth from "../../Firebase/Firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  // shwoing and hiding password:
  const [showPass, setShowPass] = useState(false);

  //  singInWith Google:

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // signUpWith Email and Password:
  const [createUserWithEmailAndPassword, user, loading, hooksError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmailChange = (event) => {
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(event.target.value)) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    //  password check six digits using regx:
    if (!/.{6,}/.test(event.target.value)) {
      setErrors({
        ...errors,
        passwordError: "Password must above six characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    }
  };

  const handleConfirmPasswordChange = (event) => {
    if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setErrors({ ...errors, passwordError: "Password didn't match" });
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (userInfo.email && userInfo.password === userInfo.confirmPassword) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  //   ei from er means holo jodi signUp hoye jay tahole "/"(home page e niye jao)

  const from = location?.state?.from?.pathname || "/";

  //  After google login && signUp with email and pass User redirect to the home page
  useEffect(() => {
    const User = googleUser || user;
    if (User) {
      navigate(from);
    }
  }, [googleUser, user]);

  //   firebase er behind the seen error dekhar jonne useEffect use kore response ti toast message e show korechi:

  useEffect(() => {
    //   toast message ti ekbar jate dekhay jotobar ei click kori nah keno toast message ti jate ekbarei dekhay tar jonne
    // {toastId:"id-1"} diye diyechi;
    if (hooksError) {
      switch (hooksError?.code) {
        case "Invalid registration":
          toast("This email already exist! Please provide a new email", {
            toastId: "id-email-exist",
          });
          break;

        case "auth/invalid-email":
          toast(
            "Invalid Email Provided ! Please Provide a Valid Email Address",
            { toastId: "id-1" }
          );
          break;

        case "auth/invalid-password":
          toast("Wrong Password! Provide a valid Password", {
            toastId: "id-2",
          });
          break;

        default:
          toast("Something Went Wrong", { toastId: "id-3" });
          break;
      }
    }
  }, [hooksError]);

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-title">Register</div>
        <form onSubmit={handleSubmitForm}>
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            onChange={handleEmailChange}
          />

          {errors?.emailError && (
            <p className="error-message  ">{errors?.emailError}</p>
          )}

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            <BiShow
              className="absolute top-5 right-20 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            ></BiShow>
            {errors?.passwordError && (
              <p className="error-message ">{errors?.passwordError}</p>
            )}
          </div>

          <div className="relative ">
            <input
              type="password"
              name="confirm-password"
              id=""
              placeholder="Confirm password"
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <button>Login</button>
        </form>
        <p className="text-center">
          Already have an account ?
          <Link to="/login" className="signup-link">
            &nbsp;Please SignIn
          </Link>
        </p>
        <button className="google" onClick={() => signInWithGoogle()}>
          <div className="flex items-center justify-center ">
            <FaGoogle></FaGoogle>
            <p className="mx-3"> Google</p>
          </div>
        </button>
      </div>
      {/* using react-toast  */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
