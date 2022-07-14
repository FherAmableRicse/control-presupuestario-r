import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />).debug();
  const element = screen.getByText(/💰 Presupuesto 💰/i);
  expect(element).toBeInTheDocument();
});
