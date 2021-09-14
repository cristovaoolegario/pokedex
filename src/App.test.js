import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello there text', () => {
  render(<App />);
  const initialText = screen.getByText(/Hello there/i);
  expect(initialText).toBeInTheDocument();
});
