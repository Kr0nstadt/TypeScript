import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

// Mock CSS modules
jest.mock('./Input.module.css', () => ({
  container: 'container',
  label: 'label',
  input: 'input',
  error: 'error',
  helperText: 'helperText',
  errorText: 'errorText',
  required: 'required',
}));

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Username" value="" onChange={() => {}} />);
    
    const input = screen.getByLabelText('Username');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  test('shows error message when error prop is provided', () => {
    render(<Input value="" onChange={() => {}} error="This field is required" />);
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  test('shows helper text when helperText prop is provided', () => {
    render(<Input value="" onChange={() => {}} helperText="Enter your username" />);
    
    expect(screen.getByText('Enter your username')).toBeInTheDocument();
  });

  test('shows required indicator when required prop is true', () => {
    render(<Input label="Username" value="" onChange={() => {}} required />);
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('has correct type attribute for password', () => {
    render(<Input value="" onChange={() => {}} type="password" />);
    
    // Для password inputs используем getByDisplayValue или query по атрибуту
    const input = screen.getByDisplayValue('');
    expect(input).toHaveAttribute('type', 'password');
  });

  test('has correct type attribute for text', () => {
    render(<Input value="" onChange={() => {}} type="text" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders without label', () => {
    render(<Input value="" onChange={() => {}} />);
    
    // Для input без label ищем по роли textbox
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});