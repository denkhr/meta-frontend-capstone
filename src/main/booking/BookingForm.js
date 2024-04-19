import React from 'react';
import {DateInput} from './inputs/DateInput';
import {TimeInput} from './inputs/TimeInput';
import {GuestsInput} from './inputs/GuestsInput';
import {OcassionInput} from './inputs/OcassionInput';

export const BookingForm = () => {
    return(
        <form className="booking_form">

            <DateInput/>
            <TimeInput/>
            <GuestsInput/>
            <OcassionInput/>

            <input type="submit" value="Make Your reservation"/>

        </form>
    )
}