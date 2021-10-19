import React, { useState } from 'react';
import '../Login/Login.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Register = () => {
    const {error,setError,signInUsingGoogle, user,registerUsingEmailAndPassword}=useAuth();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   
   
    const handleName=(e)=>{
        const value=e.target.value
        setName(value)
    }
    const handleEmail=(e)=>{
        const value=e.target.value
        setEmail(value)
    }
    const handlePassword=(e)=>{
        const value=e.target.value
       setPassword(value)
    }
    const handleSubmit=e=>{
        e.preventDefault();

        if(password.length<6){
            return setError('Password Must Be At least 6 Characters')
        }
        else{
            setError('')
           }
        // console.log(email,password)
        registerUsingEmailAndPassword(name,email,password)
        console.log(user)


    }
    return (
        <div className="login">
            <div className="login-form">
            <h4>Register To Health Care Hospital</h4>
             <form className=" p-3 text-center" onSubmit={handleSubmit}>
                 <input className="mb-3 p-2 width" onBlur={handleName} type="text" name="" placeholder="Enter Your Name" id="" />
                <input className="mb-3 p-2 width" onBlur={handleEmail} type="email" placeholder="Enter your email adress" required name="" id="email-field" />
                <br />
                <input className="mb-3 p-2 width" onBlur={handlePassword} type="password" placeholder="Enter Your Password" name="" id="password-field" />
                <br />
                <p  className="text-danger">{error}</p>
                <input className="px-5 mb-3 btn btn-primary" type="submit" value="Submit" />
                <p>Already A Member? <NavLink to='/signin' >Sign In</NavLink></p>
    </form>

           <p>-----Or-----</p> 
            <button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
        </div>
    );
};

export default Register;