import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionsPage from './QuestionsPage';

describe('<QuestionsPage />', () => {
  test('it should mount', () => {
    render(<QuestionsPage />);
    
    const questionsPage = screen.getByTestId('QuestionsPage');

    expect(questionsPage).toBeInTheDocument();
  });
});