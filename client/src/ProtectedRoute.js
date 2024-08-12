import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Layout } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { set, selectUserData } from "./app/features/user-data/userDataSlice";

const ProtectedRoute = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  useEffect(() => {
    if (cookies["token"]) {
      const token = cookies["token"].trim();
      // console.log(token);
      // verify the jwt and set the id
      axios
        .post("/user/verify", { token: token })
        .then(({ data }) => {
          if (data.status === "success") {
            const userData = data.data;
            dispatch(set(userData));
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/login"); // Redirect to login if verification fails
        });
    } else {
      navigate("/login"); // Redirect to login if token is not available
    }
  }, []);

  return userData.id && <Layout></Layout>;
};
export default ProtectedRoute;
