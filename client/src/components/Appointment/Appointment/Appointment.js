import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <NavBar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <Footer />
        </div>
    );
};

export default Appointment;
