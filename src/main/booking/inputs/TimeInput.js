import React, { useState } from 'react';

const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]

export function TimeInput() {
  const [time, setTime] = useState(availableTimes);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <label htmlFor="res-time">Choose time
        <select
        id="res-time"
        value={time}
        onChange={handleChange}
        >
            {availableTimes.map((option, index) =>
                <option
                    key={index}
                    value={option}>
                        {option}
                </option>
            )}
        </select>
    </label>
  );
}
