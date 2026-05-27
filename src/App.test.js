import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio projects section', () => {
  render(<App />);
  expect(screen.getByText(/Logic Gate Simulator/i)).toBeInTheDocument();
  expect(screen.getByText(/LLD & HLD System Designer/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Logic Gate Simulator preview/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/LLD & HLD System Designer preview/i)).toBeInTheDocument();
});

// to deploy again
// npm run deploy