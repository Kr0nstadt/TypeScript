import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password' | 'email';
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    helperText,
    required = false,
    placeholder,
    value,
    onChange,
    type = 'text'
}) => {
    const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
    const inputClass = `${styles.input} ${error ? styles.error : ''}`;

    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                className={inputClass}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            />
            {error && <span className={styles.errorText}>{error}</span>}
            {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
        </div>
    );
};

export default Input;