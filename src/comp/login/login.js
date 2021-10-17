import React, { useContext } from "react";
import Firebasegoogle from "./../../comp/hucks/firebasegoogle";

const Login = () => {
    const {firebaseCopyCode, user} = Firebasegoogle();
    // console.log(firebaseCopyCode);
    return (
        <div>
        <h1>my email : (" {user.email} ")</h1>
        <button onClick={firebaseCopyCode}>button</button>
        </div>
    );
};

export default Login;