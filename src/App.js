import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Main } from './Main.js';

const Header = () => {

  return (
    <header position="fixed" className="grid-main header">
      <img className="nav_logo" src='/logo.jpg' alt="Little Lemon logo"></img>
      <nav>
        <ul className="nav_list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to={{ pathname: "/", hash: "about-section" }}>About</Link></li>
          <li><Link to={{ pathname: "/", hash: "specials-section" }}>Menu</Link></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>)
}

const Footer = () => {
  return (
    <footer>
      2024 Denis Khramov
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter className="page-wrapper">
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;