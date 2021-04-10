/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    const { menuTitle, children, menuItems } = props;
    return (
        <div className="col-md-3">
            <h6 className="text-primary">{menuTitle || ' '}</h6>
            <ul className="list-unstyled mt-4">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} className="text-secondary">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {children && children}
        </div>
    );
};

export default FooterCol;
