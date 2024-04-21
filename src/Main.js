import React, { useState, useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from './api';
import {ConfirmedBooking} from './ConfirmedBooking';

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload.availableTimes;
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

function TimeInput({ availableTimes, selectedTime, handleTimeChange}) {
  return (
    <label htmlFor="res-time">Choose time
      <select
        id="res-time"
        value={selectedTime}
        onChange={handleTimeChange}
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

function GuestsInput({numberOfGuests, handleNumberOfGuestsChange}) {
  return (
    <label htmlFor="guests">
      Number of guests
      <input
        type="number"
        placeholder="1"
        min="1" max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleNumberOfGuestsChange}
        />
    </label>
  );
}

function OccasionInput({occasion, handleOccasionChange}) {
  return (
    <label htmlFor="occasion">
      Occasion
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}>

        <option>Birthday</option>
        <option>Anniversary</option>
        
      </select>
    </label>
  );
}

export const BookingPage = ({ selectedDate, setSelectedDate, updateTimes, availableTimes, submitForm }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    updateTimes(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime, // Add selected time here
      guests: numberOfGuests,
      occasion: occasion
    };
    submitForm(formData);
  };

  return (
    <section className="booking-page grid-main">
      <h1>Reserve a table</h1>
      <form className="booking_form" onSubmit={handleSubmit}>

        <DateInput handleDateChange={handleDateChange} selectedDate={selectedDate} />
        <TimeInput availableTimes={availableTimes} selectedTime={selectedTime} handleTimeChange={handleTimeChange}/>
        <GuestsInput numberOfGuests={numberOfGuests} handleNumberOfGuestsChange={handleNumberOfGuestsChange}/>
        <OccasionInput occasion={occasion} handleOccasionChangee={handleOccasionChange}/>

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
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Function to initialize availableTimes
  const initializeTimes = () => {
    fetchAPI(today) // Fetch available times for today's date
      .then(times => {
        dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: times } });
      })
      .catch(error => {
        console.error('Error fetching available times:', error.message);
        // Handle error accordingly, e.g., display a message to the user
      });
  };

  // Function to update availableTimes based on selected date
  const updateTimes = (date) => {
    fetchAPI(date) // Fetch available times for the selected date
      .then(times => {
        dispatch({ type: 'UPDATE_TIMES', payload: { availableTimes: times } });
      })
      .catch(error => {
        console.error('Error fetching available times:', error.message);
        // Handle error accordingly, e.g., display a message to the user
      });
  };

  // Initialize availableTimes when component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  const navigate = useNavigate(); // Get the navigation function

  const submitForm = async (formData, navigate) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        console.log(formData);
        // If booking is confirmed, navigate to ConfirmedBooking page
        navigate("/booking/confirmed"); // Navigate to the confirmed booking page
      } else {
        // Handle case where booking submission fails
        console.error('Booking submission failed.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error.message);
      // Handle error accordingly
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage selectedDate={selectedDate} setSelectedDate={setSelectedDate} updateTimes={updateTimes} availableTimes={availableTimes} submitForm={(formData) => submitForm(formData, navigate)}/>} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};