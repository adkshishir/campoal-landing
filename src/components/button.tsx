'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const Button = (props: Props) => {
  const { children, className, onClick } = props;
  return (
      <button
      onClick={onClick}
      className={`${twMerge('font-bold bg-[var(--primary)] hover:bg-opacity-90 text-center text-white border border-transparent py-3 px-6 rounded-xl', className)}`}>
      {children}
    </button>
  );
};

export default Button;
