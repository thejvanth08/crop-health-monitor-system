import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="flex flex-col h-full text-white pt-20 pl-5 *: *:mb-4 *:w-40 *:px-2 *:py-1 *:rounded-md *:font-semibold">
        <NavLink to="/disease-analysis">Disease Analysis</NavLink>
        <NavLink to="/soil-analysis">Soil Analysis</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
  );
}
export default NavBar;