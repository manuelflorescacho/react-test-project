import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageCardHolder from './PageCardHolder';

describe('<PageCardHolder />', () => {
  test('it should mount', () => {
    render(<PageCardHolder />);
    
    const pageCardHolder = screen.getByTestId('PageCardHolder');

    expect(pageCardHolder).toBeInTheDocument();
  });
});