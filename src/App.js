import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Main } from './Main.js';
import lemonImage from './assets/img/lemon-illustation.png';

const Header = () => {

  return (
    <header position="fixed" className="grid-main paddings-section pt-20 pb-20">
      <div className="h-flex gap-20 col-full">
        <img className="nav_logo" src='/logo.jpg' alt="Little Lemon logo"></img>
        <nav>
          <ul className="nav_list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to={{ pathname: "/", hash: "about-section" }}>About</Link></li>
            <li><Link to={{ pathname: "/", hash: "specials-section" }}>Menu</Link></li>
            <li className="desktop-only"><a href="#order" className="text-nowrap">Order Online</a></li>
            <li className="desktop-only"><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>)
}

const Footer = () => {
  return (
    <footer className="grid-main paddings-section pt-40 pb-40">
      <div className="h-flex flex-align-start gap-100 col-full">

        <img className="footer_img" src={lemonImage} alt="Little Lemon illustration"></img>

        <div className="v-flex flex-grow-2">

          <div className="h-flex gap-80 flex-align-start">

            <div className="footer_group pb-40">
              <h2 className="text-h3 color-dark-green pb-8">Doormat Navigation</h2>
              <ul className="footer_list">
                <li><a href="#path" className="text-nowrap">Home</a></li>
                <li><a href="#path" className="text-nowrap">About</a></li>
                <li><a href="#path" className="text-nowrap">Menu</a></li>
                <li><a href="#path" className="text-nowrap">Order Online</a></li>
                <li><a href="#path" className="text-nowrap">Reservations</a></li>
                <li><a href="#path" className="text-nowrap">Login</a></li>
              </ul>
            </div>

            <div className="footer_group pb-40">
              <h2 className="text-h3 color-dark-green pb-8">Contact</h2>
              <ul className="footer_list">
                <li><a href="#path" className="text-nowrap">Adress</a></li>
                <li><a href="#path" className="text-nowrap">Phone</a></li>
                <li><a href="#path" className="text-nowrap">Email</a></li>
              </ul>
            </div>

            <div className="footer_group pb-40">
              <h2 className="text-h3 color-dark-green pb-8">Social Media Links</h2>
              <ul className="footer_list">
                <li><a href="#path" className="text-nowrap">Facebook</a></li>
                <li><a href="#path" className="text-nowrap">Instagram</a></li>
                <li><a href="#path" className="text-nowrap">Twitter</a></li>
                <li><a href="#path" className="text-nowrap">Youtube</a></li>
                <li><a href="#path" className="text-nowrap">LinkedIn</a></li>
              </ul>
            </div>

          </div>

          <div className="text-legal">2024 © Denis Khramov</div>

        </div>

      </div>
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