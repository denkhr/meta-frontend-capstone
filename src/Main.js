import React, { useState, useReducer, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Logic to update available times based on selected date (action.payload.date)
      return action.payload.availableTimes; // For now, returning the same available times
    default:
      return state;
  }
};

function DateInput({ handleDateChange, selectedDate }) {
  return (
    <label htmlFor="res-date">
      Choose date
      <input
        type="date"
        value={selectedDate}
        id="res-date"
        onChange={handleDateChange}
      />
    </label>
  );
}

function TimeInput({ availableTimes, updateTimes }) {
  return (
    <label htmlFor="res-time">Choose time
      <select
        id="res-time"
        onChange={updateTimes}
        /* value={time} */
      >
        {availableTimes && availableTimes.map((option, index) =>
          (<option
            key={index}
            value={option}>
            {option}
          </option>)
        )}
      </select>
    </label>
  );
}

function GuestsInput() {
  return (
    <label htmlFor="guests">
      Number of guests
      <input
        type="number"
        placeholder="1"
        min="1" max="10"
        id="guests" />
    </label>
  );
}

function OcassionInput() {
  return (
    <label htmlFor="occasion">
      Occasion
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </label>
  );
}

export const BookingPage = ({ selectedDate, setSelectedDate, updateTimes, availableTimes }) => {

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    updateTimes(date);
  };

  return (
    <section className="booking-page grid-main">
      <h1>Reserve a table</h1>
      <form className="booking_form">

        <DateInput handleDateChange={handleDateChange} selectedDate={selectedDate} />
        <TimeInput availableTimes={availableTimes} updateTimes={updateTimes} />
        <GuestsInput />
        <OcassionInput />

        <input type="submit" value="Make Your reservation" />

      </form>
    </section>
  );
};

const CallToAction = () => {
  return(
  <>
      <section className="hero_wrapper grid-main">
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>

          <a href="/book" role="button">Book a table</a>
      </section>
  </>
  )
}

const Specials = () => {
  return(
  <section className="specials_wrapper grid-main">
      Specials
  </section>
  )
}

const CustomersSay = () => {
  return(
  <section className="testimonials_wrapper grid-main">
      Testimonials
  </section>
  )
}

const Chicago = () => {
  return(
  <section className="about_wrapper grid-main">
      About Us
  </section>
  )
}

const HomePage = () => {
  return(
      <>
          <CallToAction/>
          <Specials/>
          <CustomersSay/>
          <Chicago/>
      </>

  )
}

export const Main = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Function to initialize availableTimes
  const initializeTimes = () => {
    // Initialize available times here, for now, let's use the default array
    dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"] } });
  };

  // Function to update availableTimes based on selected date
  const updateTimes = (date) => {
    // Logic to update available times based on selected date
    // For now, let's use the default array
    dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: ["17:00","18:00","19:00","20:00","21:00","22:00"], date } });
  };

  // Initialize availableTimes when component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage selectedDate={selectedDate} setSelectedDate={setSelectedDate} updateTimes={updateTimes} availableTimes={availableTimes} />} />
      </Routes>
    </main>
  );
};
