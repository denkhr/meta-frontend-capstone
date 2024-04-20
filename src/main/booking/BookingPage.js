import React from 'react';
import { BookingForm } from './BookingForm';

export const BookingPage = ({ selectedDate, setSelectedDate, updateTimes, availableTimes }) => {

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    updateTimes(date);
  };

  return (
    <section className="booking-page grid-main">
      <h1>Reserve a table</h1>
      <BookingForm handleDateChange={handleDateChange} selectedDate={selectedDate} availableTimes={availableTimes} />
    </section>
  );
};
