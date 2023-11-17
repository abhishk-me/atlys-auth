import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import { useAuthPrompt } from '../utils/auth-prompt';

// Button variants - accent and text
type Variants = keyof typeof buttonVariants

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
  text?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
  authBlocked?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  // custom hook to trigger auth prompt
  const { authenticated, prompt } = useAuthPrompt();
  const {
    variant,
    text,
    children,
    iconLeft,
    iconRight,
    fullWidth,
    authBlocked,
    onClick,
    ...rest
  } = props;

  const buttonStyles = `${buttonVariants[variant]} ${fullWidth ? 'w-full' : ''}`;
  return (
    <button onClick={authBlocked ? authenticated ? onClick : prompt : onClick} {...rest} className={buttonStyles}>
      {text ? <span className='font-medium inline-flex items-center'>
        {iconLeft && <span className='pr-0.5'>
          {iconLeft}
        </span>}
        {text}
        {iconRight && <span className='pl-0.5'>
          {iconRight}
        </span>}
      </span> : children}
    </button>
  )
}

const baseStyle = 'flex flex-row justify-center items-center rounded-md overflow-hidden font-medium border-0 cursor-pointer hover:opacity-80 transition-opacity';

const buttonVariants = {
  accent: `${baseStyle} bg-accent text-white px-8 py-2.5 text-base`,
  text: `${baseStyle} bg-transparent text-white p-0 text-sm`,
};