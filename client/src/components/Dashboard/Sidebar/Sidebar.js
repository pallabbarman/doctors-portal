import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import {
    faCalendar,
    faCog,
    faGripHorizontal,
    faHome,
    faSignOutAlt,
    faUserPlus,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://web-doctors-portal.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsDoctor(data));
    }, [loggedInUser.email]);

    return (
        <div
            className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
            style={{ height: '100vh' }}
        >
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                    </Link>
                </li>
                {isDoctor && (
                    <div>
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
                    </div>
                )}
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};
export default Sidebar;
