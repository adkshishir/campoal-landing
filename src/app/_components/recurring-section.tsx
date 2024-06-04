import H1 from '@/components/H1';
import P from '@/components/p';
import Image from 'next/image';
import React from 'react';

const RecurringSection = () => {
  return (
    <section className='xl:py-12 py-6 xl:flex items-center'>
      <Image
        alt='hero image'
        src='/images/tips-image.png'
        priority
        width={1300}
        height={1300}
        className='w-full  h-fit object-cover'
      />
      <div className='w-full p-12 pt-0 text-start '>
        <H1 className=' leading-tight'>
          {' '}
          Recurring themes <br />
          in the work we do
        </H1>
        <P>
          {' '}
          Campoal is a mission-driven company, which means that we find
          ourselves returning to a similar set of questions in everything we do.
          If you already find yourself thinking about a few of the following
          questions, chances are high that you’ll love your work at Campoal.
        </P>
        {/* points */}
        <div className='xl:pt-12 pt-6'>
          <div className='flex gap-4 items-center mb-5 text-xl xl:text-2xl font-bold text-[var(--headColor)]'>
            <Image
              alt='hero image'
              src='/images/right.png'
              priority
              width={50}
              height={50}
              className='w-10  h-fit object-cover'
            />
            <h3>How do we make it absurdly easy to start</h3>
          </div>
          <div className='flex gap-4 items-center mb-5 text-xl xl:text-2xl font-bold text-[var(--headColor)]'>
            <Image
              alt='hero image'
              src='/images/right.png'
              priority
              width={50}
              height={50}
              className='w-10  h-fit object-cover'
            />
            <h3>How do we dramatically increase the volume</h3>
          </div>
          <div className='flex gap-4 items-center mb-5 text-xl xl:text-2xl font-bold text-[var(--headColor)]'>
            <Image
              alt='hero image'
              src='/images/right.png'
              priority
              width={50}
              height={50}
              className='w-10  h-fit object-cover'
            />
            <h3>What business models can technology make possible</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecurringSection;
