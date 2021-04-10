import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './InfoCard.css';

const InfoCard = (props) => {
    const { info } = props;
    const { title, description, icon, background } = info;
    return (
        <Col md={4} className="info-card">
            <div className={`d-flex justify-content-center info-container info-${background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </Col>
    );
};

export default InfoCard;
