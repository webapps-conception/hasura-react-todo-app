import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ToDo App', () => {
  render(<App />);
  const linkElement = screen.getByText(/ToDo App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Add button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
});
