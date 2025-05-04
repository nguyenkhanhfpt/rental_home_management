import { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  component?: ElementType;
  gutterBottom?: boolean;
}

const VARIANT_STYLES = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
  overline: 'text-xs uppercase tracking-wider',
};

const VARIANT_MAPPINGS: Record<TypographyProps['variant'] & string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const Typography = ({
  variant = 'body1',
  component,
  gutterBottom = false,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = component || VARIANT_MAPPINGS[variant];
  
  const classes = twMerge(
    VARIANT_STYLES[variant],
    gutterBottom && 'mb-4',
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}; 