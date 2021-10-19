import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "./NotFound.jpg"
const NotFound = () => {
    return (
        <div>
            <img style={{width:'500px'}} src={img} alt="" />
            <br />
            <NavLink to='/home'><button className="btn btn-primary">Go Back</button></NavLink>
        </div>
    );
};

export default NotFound;