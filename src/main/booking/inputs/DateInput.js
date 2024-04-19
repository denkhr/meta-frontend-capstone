import React, { useState } from 'react';

export function DateInput() {
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
