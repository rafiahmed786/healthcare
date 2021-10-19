import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,description}=service;
    return (
        <div className="card card-width">
        <div style={{width:'100%',height:"200px",overflow:"hidden"}}>
        <img src={img} style={{width:'100%',objectFit:"cover"}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0,80)}...</p>
          <NavLink to={`/serviceDetails/${id}`}><button className="btn btn-primary">View Details</button></NavLink>
          
        </div>
      </div>
    );
};

export default Service;