import {queryAllByAttribute, render, screen} from '@testing-library/react';
import App from './App';

test('renders learn anapioficeandfire link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn An API of Ice And Fire/i);
  expect(linkElement).toBeInTheDocument();
});

