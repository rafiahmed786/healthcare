import React from 'react';
import './Services.css'
import useServices from '../../Hooks/useServices';
import Service from '../../Service/Service';
import { NavLink } from 'react-router-dom';

const Services = () => {
    const [services]=useServices();
    return (
        <div id='services'>
            <h2 className="text-primary mt-4">Our Services</h2>
        <div className="all-cards">
            
            {
                services.slice(0,5).map(service=> <Service key={service.id} service={service}></Service>)
            }
        </div>
        <NavLink to='/services'><button className="btn btn-primary mt-4 mb-5 px-4">View All</button></NavLink>
        </div>
    );
};

export default Services;