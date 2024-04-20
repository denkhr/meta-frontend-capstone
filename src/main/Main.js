import React, { useState } from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from './homepage/HomePage.js';
import {BookingPage} from './booking/BookingPage.js';

export const Main = () => {
    const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]

    const [time, setTime] = useState('');

    const handleTime = (event) => {
        setTime(event.target.value); // Update the selected time state
    };

    return(
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/booking" element={<BookingPage time={time} availableTimes={availableTimes} handleTime={handleTime} />}></Route>
        </Routes>
    </main>
    )
}