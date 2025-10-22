import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock для CSS модулей
jest.mock('./components/Button/Button.module.css', () => ({
  button: 'button',
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  disabled: 'disabled',
}));

jest.mock('./components/Input/Input.module.css', () => ({
  container: 'container',
  label: 'label',
  input: 'input',
  error: 'error',
  helperText: 'helperText',
  errorText: 'errorText',
  required: 'required',
}));

test('renders component library demo', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Component Library Demo/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders button components section', () => {
  render(<App />);
  const buttonSection = screen.getByText(/Button Components/i);
  expect(buttonSection).toBeInTheDocument();
});

test('renders input components section', () => {
  render(<App />);
  const inputSection = screen.getByText(/Input Components/i);
  expect(inputSection).toBeInTheDocument();
});