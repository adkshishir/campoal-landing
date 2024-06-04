import H1 from '@/components/H1';
import P from '@/components/p';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className='xl:pt-12 pt-6 w-full xl:max-w-[90%] mx-auto'>
      <H1>We do things differently</H1>

      <P>Learn more about the company, the team behind it and how we think.</P>
      <Image
        alt='hero image'
        src='/images/hero-image.png'
        priority
        width={1300}
        height={1300}
        className='w-full  h-fit object-cover'
      />
    </section>
  );
};

export default HeroSection;
