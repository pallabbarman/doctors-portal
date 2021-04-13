import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://web-doctors-portal.herokuapp.com/doctors')
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {doctors.length === 0 && <Spinner animation="grow" variant="warning" />}
                    {doctors.map((doctor) => (
                        <Doctor key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Doctors;
