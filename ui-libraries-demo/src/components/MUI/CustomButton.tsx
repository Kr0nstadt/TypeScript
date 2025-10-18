import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface CustomButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => !['customVariant'].includes(prop as string),
})<{ customVariant?: ButtonVariant }>(({ theme, customVariant }) => ({
  ...(customVariant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(customVariant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
  ...(customVariant === 'danger' && {
    backgroundColor: theme.palette.custom.danger,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  }),
}));

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <StyledButton
      customVariant={variant}
      variant="contained"
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : undefined}
    >
      {children}
    </StyledButton>
  );
};