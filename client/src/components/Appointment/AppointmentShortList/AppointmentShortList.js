/* eslint-disable react/no-array-index-key */
import React from 'react';

const AppointmentShortList = (props) => {
    const { appointments } = props;
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">
                        Name
                    </th>
                    <th className="text-secondary" scope="col">
                        Phone
                    </th>
                    <th className="text-secondary" scope="col">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;
