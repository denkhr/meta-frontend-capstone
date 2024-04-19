import React, { useState } from 'react';

export function DateInput() {
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    setDate(event.target.value);
    showDate(event.target.value);
  };

  const showDate = (date) => {
    console.log("Inputted date value:", date);
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
