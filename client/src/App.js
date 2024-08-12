import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  ResetPassword,
  Overview,
  DiseaseAnalysis,
  SoilAnalysis,
  Reports,
  Profile,
  Error,
  Layout,
  SelectCrops,
  SelectNodes,
} from "./pages";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
// send credentials like cookies to server which is from different origin
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/select-crops" element={<SelectCrops />}></Route>
      <Route path="/select-nodes" element={<SelectNodes />}></Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="overview" element={<Overview />}></Route>
        <Route path="disease-analysis" element={<DiseaseAnalysis />}></Route>
        <Route path="soil-analysis" element={<SoilAnalysis />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
export default App;
