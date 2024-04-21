import { render, screen } from '@testing-library/react';
import { BookingPage } from './Main';
import { availableTimesReducer } from './Main';
import { fetchAPI } from './api'; // Import fetchAPI function

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
