import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import signupImg from "../assets/images/signup.svg";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { signupInputs } from "../constants/constants";
import Input from "../components/Input";
import { useAppContext } from "../UserContext";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import * as Yup from "yup";


const Signup = () => {
  const {setUserData} = useAppContext();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const schemaValidation = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[\W_]/, "Password must contain at least one special character"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation)
  });

  const onSuccess = async (formData) => {
    console.log(formData);
    try {
      // const { data } = await axios.post("/auth/signup", )
    } catch (err) {

    }
    // after successful form submission
    navigate("/select-crops");
  };
  const onFailure = (formData) => {
    // alert("invalid input");
  };
  
  return (
    <div className="w-full h-screen flex">
      <div className="bg-primary hidden w-1/2 h-full lg:flex justify-center items-center">
        <img
          className="max-w-[450px] h-auto"
          src={signupImg}
          alt="login page illustration"
        />
      </div>
      <div className="w-full h-full lg:w-1/2 p-4">
        <form
          className="flex flex-col h-full items-center justify-center pb-10"
          action=""
          onSubmit={handleSubmit(onSuccess, onFailure)}
        >
          <h3 className="text-xl text-center pb-10">Create Your New Account</h3>

          {signupInputs.map((input) => {
            return <Input {...input} register={register}></Input>;
          })}
          {errors?.email && <p className="text-black mt-1">{errors?.email?.message}</p>}
          <div className="relative w-full max-w-96">
            <input
              className="absolute z-0 bg-tertiary placeholder:text-green-500 w-full px-3 py-2 outline-none rounded-lg"
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              {...register("newPassword")}
            />
            <span
              className="absolute right-2 top-2.5 cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <IoEyeOffSharp size={20} />
              ) : (
                <IoEyeSharp size={20} />
              )}
            </span>
          </div>
          {errors?.newPassword && <p className="text-black mt-1">{errors?.newPassword?.message}</p>}
          <div className="relative w-full max-w-96 mt-12">
            <input
              className="absolute z-0 bg-tertiary placeholder:text-green-500 w-full px-3 py-2 outline-none rounded-lg"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <span
              className="absolute right-2 top-2.5 cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <IoEyeOffSharp size={20} />
              ) : (
                <IoEyeSharp size={20} />
              )}
            </span>
          </div>
          {errors?.confirmPassword && <p className="text-black mt-1">{errors?.confirmPassword?.message}</p> }

          <button className="bg-primary text-tertiary font-semibold max-w-96 w-full py-2 rounded-lg my-4 mt-20">
            Sign Up
          </button>
          <p>
            Already have a account?{" "}
            <Link className="text-primary font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
