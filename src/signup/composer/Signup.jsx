import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./Signup.css";
import { useNavigate} from 'react-router-dom';


function Signup() {

    const navigate = useNavigate()
    const profil = () => navigate("/profil")

    return (
        <div className='body2'>
            <div className='box2'>
                <div className='form2'>
                    <h2> Sign Up</h2>
                    <div className='inputBox2'>
                        <input type="text" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className='inputBox2'>
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className='inputBox2'>
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <br/>
                    <input className="loginbutton2" type="submit" value="SignUp" onClick={profil}/>
                </div>
            </div>
        </div>

    )

}
export default Signup