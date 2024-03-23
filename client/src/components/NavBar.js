import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/disease-analysis">Disease Analysis</Link>
        <Link to="/soil-analysis">Soil Analysis</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
export default NavBar;