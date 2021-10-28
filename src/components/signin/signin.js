import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import loginImg from '../../images/login.svg'

const Signin = () => {
    const { signInWithGoogle, handleUserRegister, handleResetPassword} =useAuth()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

//event calling for registerwith new user 
const registrationWithNewUser = ()=>{
    handleUserRegister(email,password);
    
    
}
// reset password
const resetPassword =()=>{
    handleResetPassword(email);
}


    const hanldeEmail = (e) => {
        
        setEmail(e.target.value);
        console.log(e.target.value);

    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-8 d-none d-md-block">
                    <img className="img-fluid" src={loginImg} alt="" />
                </div>
                <div className="col-md-4 shadow p-5">
                    {/* <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={hanldeEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={hanldePassword} type="password" className="form-control" id="inputPassword3" required />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="" className="text-danger"></label>
                        <div className='d-flex justify-content-between'>
                             {/* <div className="from-group mt-5">
                                <button onClick={registrationWithNewUser} className="btn btn-primary" >Register</button>
                            </div>
                            <div className="from-group mt-5">
                                <button onClick={resetPassword} className="btn btn-primary" >reset password?</button>
                            </div>  */}
                        </div>
                    </div>
                    <div className="from-group mt-5">
                        <button onClick={signInWithGoogle} className="btn btn-primary" >Google Sign in</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signin;