import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageFooter from './PageFooter';

describe('<PageFooter />', () => {
  test('it should mount', () => {
    render(<PageFooter />);
    
    const pageFooter = screen.getByTestId('PageFooter');

    expect(pageFooter).toBeInTheDocument();
  });
});