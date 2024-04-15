import React from 'react';
import {Nav} from './Nav.js';

export const Header = () => {
    return (
    <div className="h-flex">
        <img src='/logo.jpg' alt="Little Lemon logo"></img>
        <Nav/>
    </div>)
}