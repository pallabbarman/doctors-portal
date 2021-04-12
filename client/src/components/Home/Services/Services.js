import React from 'react';
import { Row } from 'react-bootstrap';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/floraide.png';
import teeth from '../../../images/tooth.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import './Services.css';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whitening',
        img: teeth,
    },
];

const Services = () => (
    <section className="services-container container mt-5">
        <div className="text-center">
            <h5>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
        </div>
        <div className="d-flex justify-content-center">
            <Row className="mt-5">
                {servicesData.map((services) => (
                    <ServicesDetail services={services} key={services.name} />
                ))}
            </Row>
        </div>
    </section>
);

export default Services;
