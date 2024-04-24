import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import { ConfirmedBooking } from "./ConfirmedBooking";
import { HomePage } from "./HomePage";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  phone: Yup.string().required('Phone number is required').matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number'),
  selectedDate: Yup.date().required('Date is required'),
  selectedTime: Yup.string().required('Time is required'),
  numberOfGuests: Yup.number().required('Number of guests is required').min(1, 'Number of guests must be at least 1').max(10, 'The number of guests should be no more than 10'),
  occasion: Yup.string().required('Occasion is required')
});

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload.availableTimes;
    default:
      return state;
  }
};

export const BookingPage = ({
  selectedDate,
  setSelectedDate,
  updateTimes,
  availableTimes,
  submitForm}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone= (event) => {
    setPhone(event.target.value);
  };

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
      name: name,
      phone: phone,
      date: selectedDate,
      time: selectedTime,
      guests: numberOfGuests,
      occasion: occasion,
    };
    submitForm(formData);
  };

  return (
    <section className="booking-page grid-main">
      <h1>Reserve a table</h1>
      <form className="booking_form" onSubmit={handleSubmit}>

        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Enter your name..."
            id="name"
            value={name}
            onChange={handleName}
          />
        </label>

        <label htmlFor="phone">
          Phone number
          <input
            type="text"
            placeholder="Enter your phone number..."
            id="phone"
            value={phone}
            onChange={handlePhone}
          />
        </label>

        <label htmlFor="res-date">
          Choose date
          <input
            type="date"
            value={selectedDate}
            id="res-date"
            onChange={handleDateChange}
          />
        </label>

        <label htmlFor="res-time">
          Choose time
          <select
            id="res-time"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            {availableTimes &&
              availableTimes.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="guests">
          Number of guests
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={handleNumberOfGuestsChange}
          />
        </label>

        <label htmlFor="occasion">
          Occasion
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Funeral Party">Funeral Party</option>
          </select>
        </label>

        <input type="submit" value="Make Your reservation" />

      </form>
    </section>
  );
};

export const Main = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Function to initialize availableTimes
  const initializeTimes = () => {
    fetchAPI(today) // Fetch available times for today's date
      .then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: { availableTimes: times } });
      })
      .catch((error) => {
        console.error("Error fetching available times:", error.message);
        // Handle error accordingly, e.g., display a message to the user
      });
  };

  // Function to update availableTimes based on selected date
  const updateTimes = (date) => {
    fetchAPI(date) // Fetch available times for the selected date
      .then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: { availableTimes: times } });
      })
      .catch((error) => {
        console.error("Error fetching available times:", error.message);
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
        console.error("Booking submission failed.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error.message);
      // Handle error accordingly
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              updateTimes={updateTimes}
              availableTimes={availableTimes}
              submitForm={(formData) => submitForm(formData, navigate)}
            />
          }
        />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};
