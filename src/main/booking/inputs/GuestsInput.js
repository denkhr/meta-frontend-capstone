import React from 'react';

export function GuestsInput() {

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


