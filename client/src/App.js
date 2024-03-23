import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
// import  Home  from "./pages/Home";
import {Home, Login, Signup, DiseaseAnalysis, SoilAnalysis, Reports, Profile, Error, Layout} from "./pages"
import ResetPassword from "./pages/ResetPassword";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="disease-analysis" element={<DiseaseAnalysis />}></Route>
        <Route path="soil-analysis" element={<SoilAnalysis />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
        
    </div>
  )
}
export default App;