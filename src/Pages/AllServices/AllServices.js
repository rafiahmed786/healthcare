import React from 'react';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';

const AllServices = () => {
    const [services]= useServices();
    return (
        <>
        <h2 className="text-primary mt-4">Our Services</h2>
        <div className="all-cards">
            
            {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
        </div>
        </>
    );
};

export default AllServices;