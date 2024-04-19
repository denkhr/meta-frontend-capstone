import React from 'react';
import {BookingForm} from './BookingForm';

export const BookingPage = () => {
    return(
    <section className="booking-page grid-main">
        <h1>Reserve a table</h1>
        <BookingForm />
    </section>
    )
}