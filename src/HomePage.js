import React from "react";

const CallToAction = () => {
    return (
      <>
        <section className="hero_wrapper grid-main">
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>
          <p>Hero section column</p>

          <a href="/book" role="button">
            Book a table
          </a>
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