import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Layout = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative flex">
      <header className="w-full fixed z-10 flex justify-between px-4 py-3">
        <FiMenu
          className={`${
            isToggle ? "text-secondary" : ""
          } lg:invisible cursor-pointer`}
          onClick={() => {
            setIsToggle(!isToggle);
          }}
          size={26}
        ></FiMenu>
        <div className="flex items-center">
          <select
            name="multiLang"
            id=""
            className="bg-secondary px-2 py-1 mr-3 rounded-lg outline-none cursor-pointer"
          >
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
            <option value="hindi">Hindi</option>
          </select>
          <CgProfile className="cursor-pointer" size={40} onClick={() => {navigate("profile")}}></CgProfile>
        </div>
      </header>
      <aside
        className={`absolute lg:relative bg-primary w-64 lg:w-72 h-screen top-0 ${
          isToggle ? "left-0" : "-left-64"
        } lg:left-0 transition-all`}
      >
        <NavBar></NavBar>
      </aside>
      {/* actual component */}
      <div className="pt-20 px-3 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Layout;