import React from 'react';
import { Button } from 'react-bootstrap';
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
          <Button variant="primary" onClick={logOut}>Sign out</Button>
        </div>

        </div>
    )
}

export default Profile;