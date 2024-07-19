import { useState, createContext, useContext } from "react";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const UserContext = ({ children }) => {
  // selection of general crops
  const [overviewCrops, setOverviewCrops] = useState([]);
  // selection of fields - node + crop
  const [fields, setFields] = useState([]);
  // user profile data (from signup)
  const [userData, setUserData] = useState({});

  const contextValue = {
    overviewCrops, setOverviewCrops, fields, setFields, userData, setUserData
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
export default UserContext;