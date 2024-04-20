import { render, screen } from '@testing-library/react';
import {BookingPage} from './Main.js';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const bookingHeader = screen.getByText("Reserve a table");
  expect(bookingHeader).toBeInTheDocument();
});