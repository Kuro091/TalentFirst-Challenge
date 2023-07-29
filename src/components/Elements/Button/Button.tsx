import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button ref={ref} className={`${styles.button} ${className}`} {...props}>
      <span className='mx-2'>{props.children}</span>
    </button>
  );
});

export default Button;
