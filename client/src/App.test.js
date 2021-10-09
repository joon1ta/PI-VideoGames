import { render, screen } from '@testing-library/react';

import App from './App';

test('this has a button/link to begin', () => {
  render(<App />);
  const linkElement = screen.getByText(/Press Start/i);
  expect(linkElement).toBeInTheDocument();
});


