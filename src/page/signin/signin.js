import React, { useContext } from "react";
import Firebasehuck from "../hucks/firebasehuck";

const Signin = () => {
    const {firebaseCopyCode, user} = Firebasehuck();
    // console.log(firebaseCopyCode);
    return (
        <div>
        <h1>my email : (" {user.email} ")</h1>
        <button onClick={firebaseCopyCode}>button</button>
        </div>
    );
};

export default Signin;