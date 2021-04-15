import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../../components/SearchBar';

test('renders a message', () => {
  const { getByText } = render(<SearchBar />);
  expect(getByText('search')).toBeInTheDocument();
});
