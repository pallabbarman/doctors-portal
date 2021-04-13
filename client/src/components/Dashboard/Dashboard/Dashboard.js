import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    useEffect(() => {
        fetch('https://web-doctors-portal.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, [loggedInUser.email, selectedDate]);

    return (
        <section>
            <Container fluid style={{ height: '100%', backgroundColor: '#F4FDFB' }}>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <Calendar onChange={handleDateChange} value={new Date()} />
                    </Col>
                    <Col md={5}>
                        <AppointmentByDate appointments={appointments} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Dashboard;
