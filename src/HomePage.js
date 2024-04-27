import React, { useEffect } from "react";
import heroImage from "./assets/img/restaurantfood.jpg";
import greekSalad from "./assets/img/greek-salad.jpg";
import bruchetta from "./assets/img/bruchetta.png";
import lemonDessert from "./assets/img/lemon-dessert.jpg";
import orderIcon from "./assets/icons/order-icon.svg";
import avatar1 from "./assets/img/avatar1.jpg";
import avatar2 from "./assets/img/avatar2.jpg";
import avatar3 from "./assets/img/avatar3.jpg";
import avatar4 from "./assets/img/avatar4.jpg";
import starFull from "./assets/icons/star-yellow.svg";
import starEmpty from "./assets/icons/star-grey.svg";
import { useLocation } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="hero-section" className="grid-main paddings-section pt-40 pb-40">
      <div className="h-flex gap-40 col-full">

        <div className="v-flex gap-20 hero_text">

          <div className="v-flex">
            <h1 className="color-yellow">Little Lemon</h1>
            <h2 className="pb-20">Chicago</h2>
            <p className="text-60ch pb-20 text-balance">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>

          <a href="/book" className="btn" role="Button" aria-label="button">Reserve a table</a>

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
    <section id="specials-section" className="grid-main paddings-section pb-80 pt-100">
      <div className="h-flex gap-40 col-full pb-20">
        <h2 className="text-nowrap text-h1">This week specials!</h2>
        <button className="color-white bg-black" aria-label="Button">Online Menu</button>
      </div>

      <div className="card-group gap-40 col-full">

        <div className="card v-flex">

          <div class="card_image">
            <img src={greekSalad} alt="Greek salad" />
          </div>

          <div className="card_text">
            <div className="h-flex pb-20">
              <h2 className="text-h3">Greek salad</h2>
              <span className="card_price">$12.99</span>
            </div>
            <p className="color-dark-green pb-40">
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <a href="/" className="order-btn h-flex gap-12" role="button" aria-label="Button">
              Order a delivery
              <span>
                <img src={orderIcon} alt="Order icon" />
              </span>
            </a>
          </div>

        </div>

        <div className="card v-flex">

          <div class="card_image">
            <img src={bruchetta} alt="Bruchetta" />
          </div>

          <div className="card_text">
            <div className="h-flex pb-20">
              <h2 className="text-h3">Bruchetta</h2>
              <span className="card_price">$5.99</span>
            </div>
            <p className="color-dark-green pb-40">
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.            </p>
            <a href="/" className="order-btn h-flex gap-12" role="button" aria-label="Button">
              Order a delivery
              <span>
                <img src={orderIcon} alt="Order icon" />
              </span>
            </a>
          </div>

        </div>

        <div className="card v-flex">

          <div class="card_image">
            <img src={lemonDessert} alt="Lemon dessert" />
          </div>

          <div className="card_text">
            <div className="h-flex pb-20">
              <h2 className="text-h3">Lemon Dessert</h2>
              <span className="card_price">$5.00</span>
            </div>
            <p className="color-dark-green pb-40">
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.            </p>
            <a href="/" className="order-btn h-flex gap-12" role="button" aria-label="Button">
              Order a delivery
              <span>
                <img src={orderIcon} alt="Order icon" />
              </span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

const CustomersSay = () => {
  return (
    <section id="testimonials-section" className="grid-main paddings-section pt-80 pb-80">
      <div className="col-full pb-20">
        <h2 className="text-h1 text-center">Testimonials</h2>
      </div>

      <div className="card-group h-flex gap-20 col-full">

        <div className="testimonial_card">

          <div className="h-flex flex-start gap-4 pb-20">
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
          </div>

          <div className="h-flex flex-start gap-20 pb-20">
            <img className="avatar" src={avatar1} alt="Avatar" />
            <h2 className="text-h3">Joe Black</h2>
          </div>

          <p className="color-dark-green">"Little Lemon is a hidden gem! The flavors in every dish are so vibrant and fresh, it's like a burst of sunshine on your taste buds. I keep coming back for more!"</p>

        </div>

        <div className="testimonial_card">

          <div className="h-flex flex-start gap-4 pb-20">
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starEmpty} alt="Star" />
          </div>

          <div className="h-flex flex-start gap-20 pb-20">
            <img className="avatar" src={avatar2} alt="Avatar" />
            <h2 className="text-h3">Mary Jane</h2>
          </div>

          <p className="color-dark-green">"I stumbled upon Little Lemon by chance and I'm so glad I did! The food is not only delicious but also beautifully presented. It's become my go-to spot for a delightful dining experience."</p>

        </div>

        <div className="testimonial_card">

          <div className="h-flex flex-start gap-4 pb-20">
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
          </div>

          <div className="h-flex flex-start gap-20 pb-20">
            <img className="avatar" src={avatar3} alt="Avatar" />
            <h2 className="text-h3">Mike Myers</h2>
          </div>

          <p className="color-dark-green">"Little Lemon never disappoints! The cozy atmosphere combined with the exceptional service and mouthwatering dishes make it a standout restaurant. I highly recommend it to anyone looking for a culinary adventure."</p>

        </div>

        <div className="testimonial_card">

          <div className="h-flex flex-start gap-4 pb-20">
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
            <img className="rate-icon" src={starFull} alt="Star" />
          </div>

          <div className="h-flex flex-start gap-20 pb-20">
            <img className="avatar" src={avatar4} alt="Avatar" />
            <h2 className="text-h3">Vikki Vale</h2>
          </div>

          <p className="color-dark-green">"As a food enthusiast, I'm always on the lookout for unique dining experiences, and Little Lemon exceeded my expectations. From their creative menu to their attention to detail, it's evident that they're passionate about delivering top-notch quality. A must-try for any food lover!"</p>

        </div>

      </div>

    </section>
  );
};

const Chicago = () => {
  return (
    <section id="about-section" className="grid-main paddings-section pt-40 pb-40">
      <div className="h-flex gap-40 col-full">
        <h2 className="text-h1">Little Lemon</h2>
      </div>
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
