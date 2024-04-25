import React, { useEffect } from "react";
import heroImage from "./assets/img/restaurantfood.jpg";
import { useLocation } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="hero_wrapper grid-main">
      <div className="h-flex col-12">

        <div className="v-flex">

          <div className="hero_text">
            <h1 className="col-yellow">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>

          <a href="/book" className="btn" role="button">Reserve a table</a>

        </div>

        <img className="hero_img" src={heroImage} alt="The waiter is serving a dish" />

      </div>
    </section>
  );
};

const Specials = () => {
  return (
    <section id="specials-section" className="grid-main">
      <div className="h-flex col-12">
        <h1>Specials</h1>
        <button>Online Menu</button>
      </div>

      <div>
        <button>Order a delivery</button>
      </div>

    </section>
  );
};

const CustomersSay = () => {
  return (
    <section className="testimonials_wrapper grid-main">Testimonials</section>
  );
};

const Chicago = () => {
  return <section id="about-section" className="about_wrapper grid-main">About Us</section>;
};

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.substring(1); // Remove the "#" character
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
};
