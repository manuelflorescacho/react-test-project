import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppContext from './AppContext';

describe('<AppContext />', () => {
  test('it should mount', () => {
    render(<AppContext />);
    
    const appContext = screen.getByTestId('AppContext');

    expect(appContext).toBeInTheDocument();
  });
});