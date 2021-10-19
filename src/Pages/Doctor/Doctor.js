import React from 'react';

const Doctor = ({doctor}) => {
    const {name,img,designation}=doctor;
    return (
        <div className="card card-width">
        <div style={{width:'100%',height:"300px",overflow:"hidden"}}>
        <img src={img} style={{width:'100%',objectFit:"cover"}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{designation}</p>
          
        </div>
      </div>
    );
};

export default Doctor;