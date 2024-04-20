import React, { useState, useReducer, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './homepage/HomePage.js';
import { BookingPage } from './booking/BookingPage.js';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Logic to update available times based on selected date (action.payload.date)
      return action.payload.availableTimes; // For now, returning the same available times
    default:
      return state;
  }
};

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
