import React from 'react';

const BookingCard = (props) => {
    const { booking } = props;
    const { subject, visitingHour, totalSpace } = booking;
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button type="button" className="btn btn-brand text-uppercase">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
