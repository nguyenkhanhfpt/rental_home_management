import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../shared/lib/utils';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'error';
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      isFullWidth = false,
      label,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles =
      'rounded-md border bg-white px-3 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variants = {
      default: 'border-gray-300 focus-visible:ring-primary-500',
      error: 'border-red-500 focus-visible:ring-red-500',
    };

    const sizes = {
      sm: 'h-9 text-sm',
      md: 'h-10 text-base',
      lg: 'h-11 text-lg',
    };

    return (
      <div className={cn('flex flex-col gap-1.5', isFullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            isFullWidth && 'w-full',
            className
          )}
          aria-invalid={variant === 'error'}
          aria-errormessage={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm font-medium text-red-500"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
