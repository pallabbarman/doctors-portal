import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = (props) => {
    const { booking, date } = props;
    const { subject, visitingHour, totalSpace } = booking;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button
                        onClick={openModal}
                        type="button"
                        className="btn btn-brand text-uppercase"
                    >
                        Book Appointment
                    </button>
                    <AppointmentForm
                        appointmentOn={subject}
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                        date={date}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
