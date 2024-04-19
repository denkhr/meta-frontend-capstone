import React from 'react';
import {CallToAction} from './CallToAction.js';
import {Specials} from './Specials.js';
import {CustomersSay} from './CustomersSay.js';
import {Chicago} from './Chicago.js';

export const HomePage = () => {
    return(
        <>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </>

    )
}