import React from 'react';
import { twMerge } from 'tailwind-merge';
type props = {
  children: React.ReactNode;
  className?: string;
};
const P = (props: props) => {
  const { children, className } = props;
  return (
    <p
      className={`${twMerge(
        'xl:text-lg text-mdtext-xl xl: text-[var(--paColor)] font-normal',
        className
      )}`}>
      {children}
    </p>
  );
};

export default P;
