import React, { useEffect } from "react";
import heroImage from "./assets/img/restaurantfood.jpg";
import { useLocation } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="hero-section" className="grid-main paddings-section pt-40 pb-40">
      <div className="h-flex gap-40 col-full">

        <div className="v-flex gap-20 hero_text">

          <div className="v-flex">
            <h1 className="color-yellow">Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="text-60ch">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>

          <a href="/book" className="btn" role="button">Reserve a table</a>

        </div>

        <div className="hero_img">
          <img src={heroImage} alt="The waiter is serving a dish" />
        </div>

      </div>
    </section>
  );
};

const Specials = () => {
  return (
    <section id="specials-section" className="grid-main paddings-section pb-40 pt-100">
      <div className="h-flex col-12">
        <h1>Specials</h1>
        <button>Online Menu</button>
      </div>

      <div className="h-flex col-12">
        <div>
          <button>Order a delivery</button>
        </div>
      </div>

    </section>
  );
};

const CustomersSay = () => {
  return (
    <section id="testimonials-section" className="grid-main paddings-section pt-40 pb-40">
      Testimonials
    </section>
  );
};

const Chicago = () => {
  return (
    <section id="about-section" className="grid-main paddings-section pt-40 pb-40">
      About Us
    </section>
  );
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
