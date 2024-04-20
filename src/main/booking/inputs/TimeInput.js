import React, { useState } from 'react';

export function TimeInput() {
/*   const [time, setTime] = useState(availableTimes); */

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
