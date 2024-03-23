import { useForm } from "react-hook-form";
import { useNavigate, Link} from "react-router-dom";
import { useState, useRef } from "react";
import loginImg from "../assets/images/rice field-amico.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    console.log(passwordRef.current);
    // if(showPassword) 
    //   passwordRef.current.type = "text";
    // else
    //   passwordRef.current.type = "password";
  }
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm();


  const onSubmit = (data) => {
    console.log(data);
    // after successful form submission
    navigate("/disease-analysis");
  }

  return (
    <div className="w-full h-screen flex">
      <div className="hidden bg-green-200 w-1/2 h-full lg:flex justify-center items-center">
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
            className="bg-green-100 placeholder:text-green-600 max-w-96 w-full px-3 py-2 mb-2 outline-none rounded-lg"
            type="email"
            placeholder="Email Address"
            {...register("email")}
          />
            <input
              ref={passwordRef}
              className="z-0 bg-green-100 placeholder:text-green-600 max-w-96 w-full px-3 py-2 mb-1 outline-none rounded-lg"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <span className="float-right" onClick={handleTogglePassword}>
              {showPassword ? "Hide" : "Show"}
            </span>
          <div className="max-w-96 w-full">
            <Link className="text-slate-500 float-right" to="/reset-password">
              Forgot Password?
            </Link>
          </div>
          <button className="bg-green-900 text-green-200 font-semibold max-w-96 w-full py-2 rounded-lg my-4">
            Login
          </button>
          <p>
            Already you new?{" "}
            <Link className="text-green-900 font-semibold" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;