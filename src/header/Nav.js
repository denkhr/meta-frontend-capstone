import React from 'react';
import {Link} from "react-router-dom";


export const Nav = () => {
    return(
        <nav>
            <ul className="nav_list">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
            </ul>
        </nav>
    )
}
