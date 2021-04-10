import React from 'react';
import { Col } from 'react-bootstrap';

const ServicesDetail = (props) => {
    const { services } = props;
    const { img, name } = services;
    return (
        <Col md={4} className="text-center">
            <img style={{ height: '50px' }} src={img} alt="" />
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, magnam!
            </p>
        </Col>
    );
};

export default ServicesDetail;
