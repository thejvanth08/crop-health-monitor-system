import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed bg-primary flex flex-col w-60 h-full text-white pt-20 pl-4 *: *:mb-4 *:w-40 *:px-2 *:py-1 *:rounded-md *:font-semibold">
      <NavLink to="/overview">Overview</NavLink>
      <NavLink to="/disease-analysis">Disease Analysis</NavLink>
      <NavLink to="/soil-analysis">Soil Analysis</NavLink>
      <NavLink to="/reports">Reports</NavLink>
    </nav>
  );
}
export default NavBar;