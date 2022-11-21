import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntroPage from './IntroPage';

describe('<IntroPage />', () => {
  test('it should mount', () => {
    render(<IntroPage />);
    
    const introPage = screen.getByTestId('IntroPage');

    expect(introPage).toBeInTheDocument();
  });
});