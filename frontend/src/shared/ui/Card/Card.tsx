import { forwardRef, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const PADDING_STYLES = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const VARIANT_STYLES = {
  elevated: 'bg-white shadow-md hover:shadow-lg transition-shadow',
  outlined: 'border border-gray-200 bg-white',
  filled: 'bg-gray-50',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = 'elevated', padding = 'md', children, ...props },
    ref
  ) => {
    const classes = twMerge(
      'rounded-lg',
      VARIANT_STYLES[variant],
      PADDING_STYLES[padding],
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
); 