import React from 'react';

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

function TimeInput({ time, availableTimes, handleTime }) {
  return (
    <label htmlFor="res-time">Choose time
      <select
        id="res-time"
        onChange={handleTime}
        value={time}
      >
        {availableTimes.map((option, index) =>
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

export const BookingForm = ({ handleDateChange, selectedDate, availableTimes, handleTime }) => {
  return (
    <form className="booking_form">

      <DateInput handleDateChange={handleDateChange} selectedDate={selectedDate} />
      <TimeInput availableTimes={availableTimes} handleTime={handleTime} />
      <GuestsInput />
      <OcassionInput />

      <input type="submit" value="Make Your reservation" />

    </form>
  );
};
