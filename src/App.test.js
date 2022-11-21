import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';

beforeEach(() => {
  const app = render(<App />);
});

test('Find Question Mark on NavBar', () => {
  const linkElement = screen.getByText("?");
  expect(linkElement).toBeInTheDocument();

});

test('Header Component', () => {
  const pageHeader = screen.getByTestId('PageHeader');
  expect(pageHeader).toBeInTheDocument();
  
});

test('Footer Component', () => {
  const pageHeader = screen.getByTestId('PageFooter');
  expect(pageHeader).toBeInTheDocument();
  
});

test('Intro Page', () => {
  const pageHeader = screen.getByTestId('IntroPage');
  expect(pageHeader).toBeInTheDocument();
  
});
//expect(screen.getByRole('input', { name: 'the-inputs-id' })).toHaveValue('test');

test('Write John in Name Find In Completion Page', async () => {
  const nameInput = screen.getByTestId('NameInput');
  userEvent.type(nameInput, "John");
  userEvent.click(screen.getByText("Completion Page"));
  await screen.getByTestId('CompletionPage');
  const nameInCompletionPage = await screen.getByText("John");
  expect(nameInCompletionPage).toBeInTheDocument();
});


test('Questions Page', async () => {
  userEvent.click(screen.getByText("Questions Page"));
  const questionsTestId = await screen.getByTestId('QuestionsPage');
  expect(questionsTestId).toBeInTheDocument();
  
});

test('Date Page', async () => {
  userEvent.click(screen.getByText("Date Page"));
  const dateTestId = await screen.getByTestId('DatePage');
  expect(dateTestId).toBeInTheDocument();
  
});

test('Page Card Holder', () => {
  const pageHeader = screen.getByTestId('PageCardHolder');
  expect(pageHeader).toBeInTheDocument();
  
});
