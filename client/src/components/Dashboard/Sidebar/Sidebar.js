import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faCalendar,
    faCog,
    faGripHorizontal,
    faSignOutAlt,
    faUsers,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
    <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: '100vh' }}
    >
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/appointment" className="text-white">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                </Link>
            </li>
            <li>
                <Link to="/allPatients" className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                </Link>
            </li>
            <li>
                <Link to="/prescriptions" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                </Link>
            </li>
            <li>
                <Link to="/addDoctor" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                </Link>
            </li>
            <li>
                <Link to="/doctor/setting" className="text-white">
                    <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </Link>
        </div>
    </div>
);

export default Sidebar;
