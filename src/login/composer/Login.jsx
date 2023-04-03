import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./Login.css";
import { useNavigate, useEffect} from 'react-router-dom';


function Login() {

    const navigate = useNavigate()
    const signupPage = () => navigate("/signup")

    return (
        
        <div className='body'>
            <div className='box'>
                <div className='form'>
                    <h2> Sign in</h2>
                    <div className='inputBox'>
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className='inputBox'>
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className='links'>
                        <a href="#"> Forgot Password</a>
                        <a href="/signup"> Signup</a>
                    </div>
                    <input className="loginbutton" type="submit" value="Login"/>
                </div>
            </div>
        </div>

    )

}
export default Login
