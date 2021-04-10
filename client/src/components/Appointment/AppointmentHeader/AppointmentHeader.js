import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/Mask Group 1.png';

const AppointmentHeader = (props) => {
    const { handleDateChange } = props;
    return (
        <main>
            <Container>
                <Row style={{ height: '600px' }} className="d-flex align-items-center">
                    <div className="col-md-4 offset-md-1">
                        <h1>Appointment</h1>
                        <Calendar onChange={handleDateChange} value={new Date()} />
                    </div>
                    <div className="col-md-6">
                        <img src={chair} alt="" className="img-fluid" />
                    </div>
                </Row>
            </Container>
        </main>
    );
};
export default AppointmentHeader;
