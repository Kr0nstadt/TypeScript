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
    // Генерируем уникальный id для связи label и input
    const inputId = React.useId();
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