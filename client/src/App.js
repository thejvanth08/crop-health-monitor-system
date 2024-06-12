import { Routes, Route } from "react-router-dom";
import {Home, Login, Signup, DiseaseAnalysis, SoilAnalysis, Reports, Profile, Error, Layout, SelectCrops} from "./pages"
import ResetPassword from "./pages/ResetPassword";
import Overview from "./pages/Overview";
import { useState, createContext } from "react";
import SelectNodes from "./pages/SelectNodes";

// import { useTranslation } from "react-i18next";

export const AppContext = createContext();

const App = () => {
  // selection of general crops
  const [overviewCrops, setOverviewCrops] = useState([]);
  // selection of sensor nodes
  const [nodes, setNodes] = useState([]);
  // user profile data (from signup)
  const [userData, setUserData] = useState({});

  const contextValue = {
    overviewCrops, setOverviewCrops, nodes, setNodes, userData, setUserData
  };


  return (
    <div>
      <AppContext.Provider value={contextValue}>
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
      </AppContext.Provider>
    </div>
  );
}
export default App;