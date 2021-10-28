import React from 'react';
import "./profile.css";
import useAuth from '../../hooks/useAuth';

const Profile = () => {

    const {user,logOut} = useAuth();

    return(
        <div className="body">

        <div id="gradient"></div>
        <div id="card">
          <img src={user?.photoURL} />
          <h2> <b> {user?.displayName} </b> </h2>
          <p>{user?.email}</p>
          <button onClick={logOut}>Sign out</button>
        </div>

        </div>
    )
}

export default Profile;