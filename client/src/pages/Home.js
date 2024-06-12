import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-primary text-3xl bold text-center my-6">Home page</h1>
      <div className="flex justify-center gap-x-4">
        <Link
          className="bg-secondary text-primary font-semibold px-3 py-2"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-secondary text-primary font-semibold px-3 py-2"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
export default Home;