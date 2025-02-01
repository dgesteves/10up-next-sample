import { ComponentPropsWithRef, memo, ReactNode } from 'react';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from '@/constants';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
  fullWidth?: boolean;
  children: ReactNode;
} & ComponentPropsWithRef<'button'>;

export const Button = memo(function Button({
  children,
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  'aria-label': ariaLabel,
  fullWidth,
  ...props
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ].join(' ');
  const ariaLabelFallback = typeof children === 'string' ? children : undefined;

  return (
    <button
      {...props}
      className={buttonStyles}
      aria-label={ariaLabel || ariaLabelFallback}
    >
      {children}
    </button>
  );
});
