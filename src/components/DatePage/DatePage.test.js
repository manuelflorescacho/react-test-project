import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatePage from './DatePage';

describe('<DatePage />', () => {
  test('it should mount', () => {
    render(<DatePage />);
    
    const datePage = screen.getByTestId('DatePage');

    expect(datePage).toBeInTheDocument();
  });
});