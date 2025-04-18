import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-yellow-400 
        text-black 
        font-bold 
        py-3 
        px-6 
        rounded-md 
        border-4 
        border-black 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-x-1 
        hover:translate-y-1 
        transition-all 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
