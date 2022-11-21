import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  test('it should mount', () => {
    render(<PageHeader />);
    
    const pageHeader = screen.getByTestId('PageHeader');

    expect(pageHeader).toBeInTheDocument();
  });
});