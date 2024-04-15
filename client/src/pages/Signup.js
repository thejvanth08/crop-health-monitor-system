import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import signupImg from "../assets/images/signup.svg";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { signupInputs } from "../constants/contants";
import Input from "../components/Input";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // after successful form submission
    navigate("/disease-analysis");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="bg-emerald-800 hidden w-1/2 h-full lg:flex justify-center items-center">
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-xl text-center pb-10">Create Your New Account</h3>

          {signupInputs.map((input) => {
            return <Input {...input} register={register}></Input>;
          })}

          <div className="relative w-full max-w-96">
            <input
              className="absolute z-0 bg-green-100 placeholder:text-green-600 w-full px-3 py-2 outline-none rounded-lg"
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
          <div className="relative w-full max-w-96 mt-12">
            <input
              className="absolute z-0 bg-green-100 placeholder:text-green-600 w-full px-3 py-2 outline-none rounded-lg"
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

      

          <button className="bg-emerald-800 text-green-200 font-semibold max-w-96 w-full py-2 rounded-lg my-4 mt-20">
            Sign Up
          </button>
          <p>
            Already have a account?{" "}
            <Link className="text-green-800 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
