import React from 'react';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../Hooks/useDoctors';

const AllDoctors = () => {
    const [doctors]=useDoctors();
    return (
        <>
        <h2 className="text-primary mt-4">Meet Out Doctors</h2>
        <div className="all-cards">
            
            {
                doctors.map(doctor=> <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
        </>

    )};

export default AllDoctors;