import { Routes, Route } from "react-router-dom";
import {Home, Login, Signup, ResetPassword, Overview, DiseaseAnalysis, SoilAnalysis, Reports, Profile, Error, Layout, SelectCrops, SelectNodes} from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/select-crops" element={<SelectCrops />}></Route>
      <Route path="/select-nodes" element={<SelectNodes />}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="overview" element={<Overview />}></Route>
        <Route
          path="disease-analysis"
          element={<DiseaseAnalysis />}
        ></Route>
        <Route path="soil-analysis" element={<SoilAnalysis />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}
export default App;