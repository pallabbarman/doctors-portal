/* eslint-disable no-underscore-dangle */
import { css } from '@emotion/react';
import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

const override = css`
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
`;

const AppointmentDataTable = (props) => {
    const { appointments } = props;
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">
                        Sr No
                    </th>
                    <th className="text-secondary" scope="col">
                        Name
                    </th>
                    <th className="text-secondary" scope="col">
                        Gender
                    </th>
                    <th className="text-secondary" scope="col">
                        Age
                    </th>
                    <th className="text-secondary" scope="col">
                        Weight
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
                {appointments.length === 0 && (
                    <GridLoader color="#1cc7c1" css={override} size={15} />
                )}
                {appointments.map((appointment, index) => (
                    <tr key={appointment._id}>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.weight}KG</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;
