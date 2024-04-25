import heroImage from "./assets/img/restaurantfood.jpg";
import React from "react";

const CallToAction = () => {
  return (
    <>
      <section className="hero_wrapper grid-main">

        <div className="h-flex">

          <div className="hero_text">
            <h1 className="col-yellow">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist.</p>

            <a href="/book" class="btn" role="button">
              Reserve a table
            </a>
          </div>

          <div className="hero_img">
            <img src={heroImage} alt="The waiter is serving a dish" />
          </div>

        </div>

      </section>
    </>
  );
};

const Specials = () => {
  return <section className="specials_wrapper grid-main">Specials</section>;
};

const CustomersSay = () => {
  return (
    <section className="testimonials_wrapper grid-main">Testimonials</section>
  );
};

const Chicago = () => {
  return <section className="about_wrapper grid-main">About Us</section>;
};

export const HomePage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
};