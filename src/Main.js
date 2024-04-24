import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import { BookingPage } from "./BookingPage"
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
