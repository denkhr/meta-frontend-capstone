import React, { useState } from 'react';

function DateInput() {
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <label htmlFor="res-date">
      Choose date
      <input
        type="date"
        value={date}
        id="res-date"
        onChange={handleChange}
      />
    </label>
  );
}

function TimeInput({time, availableTimes, handleTime}) {

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
            id="guests"/>
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

export const BookingForm = ({time, availableTimes, handleTime}) => {
    return(
        <form className="booking_form">

            <DateInput/>
            <TimeInput time={time} availableTimes={availableTimes} handleTime={handleTime} />
            <GuestsInput/>
            <OcassionInput/>

            <input type="submit" value="Make Your reservation"/>

        </form>
    )
}