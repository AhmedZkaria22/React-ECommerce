import React, { useContext, useMemo } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from '../../Auth/AuthContext';
import { auth } from '../../Firebase/FireConfig';
import '../../Style/User.css';

const User = () => {
  const { user } = useContext(AuthContext); 
  return (
    <div id="account" className={'beforeNav'}>
      {/* <h1>User Account <span>using firebase authentication</span></h1> */}
    <div className="userAuth">
      <h1>Profile</h1>
      {/* <h3>Welcome {user.email}  <FontAwesomeIcon icon={faUser} /> </h3> */}
      <h3>  Welcome <br/> <FontAwesomeIcon icon={faUser} /> {user.email.slice(0, user.email.indexOf('@') )} </h3>
        {/* <>
        {
            (user.imageUrl) ? <img src={user.imageUrl} alt="img"/> : <FontAwesomeIcon icon={faUser} /> 
        }
        </> */}
        
      
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
    </div>
  );
};

export default User;