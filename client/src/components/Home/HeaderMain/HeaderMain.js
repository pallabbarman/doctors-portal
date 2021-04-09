import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import chair from '../../../images/Mask Group 1.png';
import './HeaderMain.css';

const HeaderMain = () => (
    <main>
        <Container>
            <Row style={{ height: '600px' }} className="d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>
                        Your New Smile <br /> Starts Here
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam similique
                        quo minus deleniti pariatur!
                    </p>
                    <Button>Get Appointment</Button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </Row>
        </Container>
    </main>
);

export default HeaderMain;
