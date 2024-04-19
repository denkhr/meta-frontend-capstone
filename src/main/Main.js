import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from './homepage/HomePage.js';
import {BookingPage} from './booking/BookingPage.js';

export const Main = () => {
    return(
    <main>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
        </Routes>
    </main>
    )
}