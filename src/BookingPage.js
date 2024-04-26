import React, { useState } from "react";
import * as Yup from 'yup';

export const BookingPage = ({
  selectedDate,
  setSelectedDate,
  updateTimes,
  availableTimes,
  submitForm
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const bookingSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    phone: Yup.string().required('Phone number is required').matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number'),
    selectedDate: Yup.date().required('Date is required'),
    selectedTime: Yup.string().required('Time is required'),
    numberOfGuests: Yup.number().required("Number of guests is required").min(1, "Must be at least 1").max(10, "Cannot exceed 10"),
    occasion: Yup.string().required("Occasion is required")
  });

  const validateForm = async () => {
    try {
      await bookingSchema.validate({
        name,
        phone,
        selectedDate,
        selectedTime,
        numberOfGuests,
        occasion
      }, { abortEarly: false });
      setFormErrors({});
      setFormValid(true);
    } catch (error) {
      const errors = {};
      error.inner.forEach(err => {
        errors[err.path] = err.message;
      });
      setFormErrors(errors);
      setFormValid(false);
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
    validateForm();
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    validateForm();
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
    validateForm();
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
    validateForm();
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    updateTimes(date);
    validateForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await validateForm();
    if (formValid) {
      const formData = {
        name: name,
        phone: phone,
        date: selectedDate,
        time: selectedTime,
        guests: numberOfGuests,
        occasion: occasion,
      };
      submitForm(formData);
    } else {
      alert("Form submission failed. Please review your entries and try again.");
    }
  };

  return (
    <section className="booking-page grid-main paddings-section pt-40 pb-40">
      <div className="h-flex gap-40 col-full">
        <h1>Reserve a table</h1>
      </div>

      <form className="booking_form pt-60 pb-100" onSubmit={handleSubmit}>

        <label htmlFor="name">
          Name
          <input
            required
            type="text"
            placeholder="Enter your name..."
            id="name"
            value={name}
            onChange={handleName}
            aria-label="Name"
          />
          {formErrors.name && <span className="error" aria-live="assertive">{formErrors.name}</span>}
        </label>

        <label htmlFor="phone">
          Phone number
          <input
            required
            type="text"
            placeholder="Enter your phone number..."
            id="phone"
            value={phone}
            onChange={handlePhone}
            aria-label="Phone Number"
          />
          {formErrors.phone && <span className="error" aria-live="assertive">{formErrors.phone}</span>}
        </label>

        <div className="h-flex gap-20">
          <label htmlFor="res-date" className="flex-grow-1">
            Choose date
            <input
              required
              type="date"
              value={selectedDate}
              id="res-date"
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]}
              aria-label="Date"
            />
            {formErrors.selectedDate && <span className="error" aria-live="assertive">{formErrors.selectedDate}</span>}
          </label>

          <label htmlFor="res-time" className="flex-grow-1">
            Choose time
            <select
              required
              id="res-time"
              value={selectedTime}
              onChange={handleTimeChange}
              aria-label="Time"
            >
              <option value="">Select a time</option>
              {availableTimes &&
                availableTimes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            {formErrors.selectedTime && <span className="error" aria-live="assertive">{formErrors.selectedTime}</span>}
          </label>
        </div>

        <div className="h-flex gap-20">
        <label htmlFor="guests" className="flex-grow-1">
          Number of guests
          <input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={handleNumberOfGuestsChange}
            aria-label="Number of Guests"
          />
          {formErrors.numberOfGuests && <span className="error" aria-live="assertive">{formErrors.numberOfGuests}</span>}
        </label>

          <label htmlFor="occasion" className="flex-grow-2">
            Occasion
            <select
              required
              id="occasion"
              value={occasion}
              onChange={handleOccasionChange}
              aria-label="Occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Funeral Party">Funeral Party</option>
            </select>
            {formErrors.occasion && <span className="error" aria-live="assertive">{formErrors.occasion}</span>}
          </label>
        </div>
        <input className="btn color-white bg-black" type="submit" value="Make Your reservation" disabled={!formValid} aria-label="Submit Reservation" />
      </form>

    </section>
  );
};