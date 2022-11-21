import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompletionPage from './CompletionPage';

describe('<CompletionPage />', () => {
  test('it should mount', () => {
    render(<CompletionPage />);
    
    const completionPage = screen.getByTestId('CompletionPage');

    expect(completionPage).toBeInTheDocument();
  });
});