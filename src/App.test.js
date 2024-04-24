import { render, screen, fireEvent, act } from '@testing-library/react';
import { BookingPage } from './BookingPage';
import { availableTimesReducer } from './Main';
import { fetchAPI } from './api';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const bookingHeader = screen.getByText("Reserve a table");
  expect(bookingHeader).toBeInTheDocument();
});

// Mock fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should update availableTimes with fetched times on mount', async () => {
    // Mock fetchAPI response
    const fetchedTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];
    fetchAPI.mockResolvedValueOnce(fetchedTimes);

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: { availableTimes: fetchedTimes } };

    const updatedState = availableTimesReducer(initialState, action);

    // Assert that availableTimes is updated
    expect(updatedState).toEqual(fetchedTimes);
  });
});

describe('updateTimes', () => {
  it('should update availableTimes with fetched times based on selected date', async () => {
    // Mock fetchAPI response
    const fetchedTimes = ['10:00 AM', '12:00 PM', '2:00 PM'];
    fetchAPI.mockResolvedValueOnce(fetchedTimes);

    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: { availableTimes: fetchedTimes } };

    const updatedState = availableTimesReducer(initialState, action);

    // Assert that availableTimes is updated with fetched times based on selected date
    expect(updatedState).toEqual(fetchedTimes);
  });
});

test('HTML5 validation attributes are applied to form input fields', () => {
  render(<BookingPage />);

  // Name input field
  const nameInput = screen.getByPlaceholderText("Enter your name...");
  expect(nameInput).toHaveAttribute('required');

  // Phone input field
  const phoneInput = screen.getByPlaceholderText("Enter your phone number...");
  expect(phoneInput).toHaveAttribute('required');

  // Date input field
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute('required');

  // Time input field
  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toHaveAttribute('required');

  // Number of guests input field
  const guestsInput = screen.getByPlaceholderText("1");
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  // Occasion input field
  const occasionInput = screen.getByLabelText("Occasion");
  expect(occasionInput).toHaveAttribute('required');
});


test('Validating form input fields for valid state', async () => {
  render(<BookingPage />);

  const nameInput = screen.getByPlaceholderText("Enter your name...");
  const phoneInput = screen.getByPlaceholderText("Enter your phone number...");
  const timeInput = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByPlaceholderText("1");
  const occasionInput = screen.getByLabelText("Occasion");

  act(() => {
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "+123456789" } });
    fireEvent.change(timeInput, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  });
});

test('Validating form input fields for invalid state', async () => {
  render(<BookingPage />);

  const nameInput = screen.getByPlaceholderText("Enter your name...");
  const phoneInput = screen.getByPlaceholderText("Enter your phone number...");

  act(() => {
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
  });
});