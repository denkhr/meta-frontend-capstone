import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import { ConfirmedBooking } from "./ConfirmedBooking";
import { HomePage } from "./HomePage";

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
  submitForm
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formValid, setFormValid] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
    validateForm();
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    validateForm();
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
    validateForm();
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
    validateForm();
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    updateTimes(date);
    validateForm();
  };

  const validateForm = () => {
    // Implement validation logic for each field
    // For simplicity, consider the form valid if all fields are filled
    const isValid = name && phone && selectedTime && numberOfGuests && occasion;
    setFormValid(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      const formData = {
        name: name,
        phone: phone,
        date: selectedDate,
        time: selectedTime,
        guests: numberOfGuests,
        occasion: occasion,
      };
      submitForm(formData);
    } else {
      // Handle case where form is invalid
    }
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
            required
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
            required
          />
        </label>

        <label htmlFor="res-date">
          Choose date
          <input
            type="date"
            value={selectedDate}
            id="res-date"
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </label>

        <label htmlFor="res-time">
          Choose time
          <select
            id="res-time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          >
            <option value="">Select a time</option>
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
            required
          />
        </label>

        <label htmlFor="occasion">
          Occasion
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Funeral Party">Funeral Party</option>
          </select>
        </label>

        <input type="submit" value="Make Your reservation" disabled={!formValid} />
      </form>
    </section>
  );
};

export const Main = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const initializeTimes = () => {
    fetchAPI(today)
      .then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: { availableTimes: times } });
      })
      .catch((error) => {
        console.error("Error fetching available times:", error.message);
      });
  };

  const updateTimes = (date) => {
    fetchAPI(date)
      .then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: { availableTimes: times } });
      })
      .catch((error) => {
        console.error("Error fetching available times:", error.message);
      });
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const response = await submitAPI(formData);
      if (response) {
        console.log(formData);
        navigate("/booking/confirmed");
      } else {
        console.error("Booking submission failed.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error.message);
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
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};
