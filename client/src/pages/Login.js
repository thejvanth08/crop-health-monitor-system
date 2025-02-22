import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import loginImg from "../assets/images/rice field-amico.svg";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import { useDispatch } from "react-redux";
import { set } from "../app/features/user-data/userDataSlice";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const {
        data: { data },
      } = await axios.post("/auth/login", formData);
      const payload = {
        id: data.userId,
        email: data.email,
      };
      // console.log(payload);
      dispatch(set(payload));
      console.log("navigating to user profile");
      navigate("/overview");
    } catch (err) {
      console.log("error happened during login", err);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="hidden bg-primary w-1/2 h-full lg:flex justify-center items-center">
        <img
          className="max-w-[500px]"
          src={loginImg}
          alt="login page illustration"
        />
      </div>
      <div className="w-full h-full lg:w-1/2 p-4">
        <form
          className="flex flex-col h-full items-center justify-center pb-10"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-xl text-center pb-10">Login Your Account</h3>
          <input
            className="bg-tertiary font-semibold placeholder:text-green-500 placeholder:font-normal max-w-96 w-full px-3 py-2 mb-2 outline-none rounded-lg"
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />

          <div className="relative w-full max-w-96">
            <input
              className="absolute z-0 bg-tertiary placeholder:text-green-500 w-full px-3 py-2 outline-none rounded-lg"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="on"
              {...register("password")}
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

          <div className="max-w-96 w-full mt-10">
            <Link
              className="text-slate-500 float-right text-sm"
              to="/reset-password"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-primary text-tertiary font-semibold max-w-96 w-full py-2 rounded-lg my-4"
          >
            Login
          </button>
          <p>
            Already a user?{" "}
            <Link className="text-primary font-semibold" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
