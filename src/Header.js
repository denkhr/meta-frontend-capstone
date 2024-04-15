import React from 'react';
import ReactDOM from 'react-dom/client';

export const Header = () => {
    return(
        <nav>
            <ul>
                <li><a href="/home">Homepage</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    )
}
