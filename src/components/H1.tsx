import React from 'react';
import { twMerge } from 'tailwind-merge';
type props = {
  children: React.ReactNode;
  className?: string;
};
const H1 = (props: props) => {
  const { children, className } = props;
  return (
    <h1
      className={twMerge(
        '2xl:text-7xl lg:text-5xl text-3xl pt-12 pb-5 text-[var(--headColor)] font-bold',
        className
      )}>
      {children}
    </h1>
  );
};

export default H1;
