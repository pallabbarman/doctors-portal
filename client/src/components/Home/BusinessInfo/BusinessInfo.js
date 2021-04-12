import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1003 USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary',
    },
];

const BusinessInfo = () => (
    <section>
        <Container className="d-flex justify-content-center">
            <Row className="w-75">
                {infosData.map((info) => (
                    <InfoCard info={info} key={info.title} />
                ))}
            </Row>
        </Container>
    </section>
);

export default BusinessInfo;
