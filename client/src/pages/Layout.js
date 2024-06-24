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
      <header className="w-full fixed z-20 flex justify-between px-4 py-3">
        <FiMenu
          className={`${
            isToggle ? "text-secondary" : ""
          } lg:invisible cursor-pointer`}
          onClick={() => {
            setIsToggle(!isToggle);
          }}
          size={26}
        ></FiMenu>
        <CgProfile className="cursor-pointer" size={40} onClick={() => {navigate("profile")}}></CgProfile>
      </header>

      <aside
        className={`absolute lg:relative w-64 lg:w-72 h-screen top-0 ${
          isToggle ? "left-0" : "-left-64"
        } lg:left-0 transition-all z-10`} 
      >
        <NavBar setIsToggle={setIsToggle}></NavBar>
      </aside>
      {/* actual component */}
      <div className="pt-20 px-3 w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Layout;