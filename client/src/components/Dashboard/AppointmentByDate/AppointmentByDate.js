/* eslint-disable no-underscore-dangle */
import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';

const AppointmentByDate = (props) => {
    const { appointments } = props;

    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {appointments.length ? (
                <AppointmentShortList appointments={appointments} key={appointments._id} />
            ) : (
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            )}
        </div>
    );
};

export default AppointmentByDate;
