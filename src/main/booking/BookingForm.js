import React from 'react';
import {DateInput} from './inputs/DateInput';

export const BookingForm = () => {
    return(
        <form className="booking_form">

            <DateInput/>

            <label htmlFor="res-time">Choose time
                <select id="res-time ">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </label>

            <label htmlFor="guests">Number of guests
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
            </label>

            <label htmlFor="occasion">Occasion
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </label>

            <input type="submit" value="Make Your reservation"/>

        </form>
    )
}