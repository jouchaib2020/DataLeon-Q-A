import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-4 bg-[#0066FF] text-white rounded-xl font-medium text-lg
        transition-all duration-200 hover:bg-[#0052CC] hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};