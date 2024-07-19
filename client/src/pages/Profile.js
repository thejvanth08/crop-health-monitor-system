import { useAppContext } from "../UserContext";

const Profile = () => {
  const {userData, setUserData} = useAppContext();
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