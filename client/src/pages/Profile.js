import {useContext} from "react";
import { AppContext } from "../App";

const Profile = () => {
  const {userData, setUserData} = useContext(AppContext);
  if(userData) {  
    const { fullname, phoneNum, email, aadharNum } = userData;
    return (
      <div>
        hi  
      </div>
    )
  } 
  return <h1>no user data</h1>;
  
 
};

export default Profile;