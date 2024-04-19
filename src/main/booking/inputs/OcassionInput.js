import React from 'react';

export function OcassionInput() {

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