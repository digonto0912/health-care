import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const { handleUserRegister, registerWithExistingUser, logOut, handleResetPassword,user } = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [err,setErr] = useState('');
    const [isLoggedIn,setIsloggedIn]= useState(false);

    const registrationWithNewUser =(event)=>{
        event.preventDefault();
        console.log(email,password)
        if (password.length < 6) {
            setErr('password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setErr('Ensure string has two digits.');
            return;
        }
        
        isLoggedIn ? registerWithExistingUser(email, password) : handleUserRegister(email, password)
        
    
    }
    //reset password
    const resetPassword = () => {
        handleResetPassword(email);
    }
    const hanldeEmail =(e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);

    }
    const hanldePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

    }
    // event for toggling 

    const handleToggle = (e) => {
        setIsloggedIn(e.target.checked);
    }

    return (
        <div>
            <div className=" container">
                <div className="row align-items-center d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
                    <h3 >please  {isLoggedIn ? 'Log in' : 'Sign up'} here</h3>
                    {
                        user.email&&
                        <h4>logged in as : <span>{user.email}</span></h4>

                    }
                    
                    
                    <div className="col-md-4 shadow p-5">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input required onBlur={hanldeEmail} type="email" className="form-control " id="inputEmail3"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input onBlur={hanldePassword} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                        <div className="form-check">
                            <input onChange={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" htmlFor="gridCheck1">
                                is Already Register
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">password should be atleast 6 chacracter and two digits </label>
                            <div className="row mb-3 text-danger" >{err} </div>
                            <div className='d-flex justify-content-between'>
                                <div className="from-group mt-3">
                                    <button onClick={registrationWithNewUser} className="btn btn-primary" >{isLoggedIn ? 'Log in' : 'Sign up'}</button>
                                </div>
                                <div className="from-group mt-3">
                                    <button onClick={resetPassword} className="btn btn-primary" >reset password?</button>
                                </div>
                                <div className="from-group mt-3">
                                    <button onClick={logOut} className="btn btn-primary" >Log out</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Signup;