import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// Mock CSS modules
jest.mock('./Button.module.css', () => ({
  button: 'button',
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  disabled: 'disabled',
}));

describe('Button Component', () => {
  test('renders button with children', () => {
    render(
      <Button variant="primary" size="md" onClick={() => {}}>
        Click me
      </Button>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button variant="primary" size="md" onClick={handleClick}>
        Click me
      </Button>
    );
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Button variant="primary" size="md" onClick={() => {}} disabled>
        Click me
      </Button>
    );
    
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});