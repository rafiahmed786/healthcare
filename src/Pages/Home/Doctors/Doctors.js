import React from 'react';
import { NavLink } from 'react-router-dom';
import Doctor from '../../Doctor/Doctor';
import useDoctors from '../../Hooks/useDoctors';

const Doctors = () => {
    const [doctors]=useDoctors();
    return (
        <div id="doctors">
            <h2 className="text-primary mt-4">Meet Out Doctors</h2>
        <div className="all-cards">
            
            {
                doctors.slice(0,5).map(doctor=> <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
        <NavLink to='/doctors'><button className="btn btn-primary mt-4 mb-5 px-4">View All</button></NavLink>
        </div>
    );
};

export default Doctors;