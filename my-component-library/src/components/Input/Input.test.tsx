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
    
    // Теперь ищем по роли textbox, так как label связан с input через htmlFor
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    
    // Проверяем что label отображается
    expect(screen.getByText('Username')).toBeInTheDocument();
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

  test('has correct type attribute', () => {
    render(<Input value="" onChange={() => {}} type="password" />);
    
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
  });
});