import { NavLink } from "react-router-dom";

const NavBar = ({ setIsToggle }) => {
  // to close the aside navigation automatically
  const handleClick = ({}) => {
    setTimeout(() => {
      setIsToggle(false);
    }, 250)
  }

  return (
    <nav className="fixed bg-primary flex flex-col w-60 h-full text-white pt-20 pl-4 *: *:mb-4 *:w-40 *:px-2 *:py-1 *:rounded-md *:font-semibold">
      <NavLink onClick={handleClick} to="/overview">Overview</NavLink>
      <NavLink onClick={handleClick} to="/disease-analysis">Disease Analysis</NavLink>
      <NavLink onClick={handleClick} to="/soil-analysis">Soil Analysis</NavLink>
      <NavLink onClick={handleClick} to="/reports">Reports</NavLink>
    </nav>
  );
}
export default NavBar;