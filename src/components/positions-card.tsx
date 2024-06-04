import React from 'react';
import Button from './button';
import P from './p';
type props = {
  title: string;
  description: string;
  keywords: string[];
};

const PositionCard = (props: props) => {
  const { title, description, keywords } = props;
  return (
    <div className='bg-white rounded-2xl p-12 xl:flex  shadow-lg'>
      <div>
        <h2 className='xl:text-3xl text-xl mb-4 font-semibold text-[var(--headColor)]'>
          {title}
        </h2>
        <P>{description}</P>
        <div className='flex gap-4  my-4'>
          {keywords.map((keyword, index) => (
            <P key={index} className=' font-semibold'>
              {keyword}
            </P>
          ))}
        </div>
      </div>
      <div className='lg:w-[40%] flex flex-col items-center justify-center xl:h-full w-full'>
        <Button className='px-10'>Apply Now</Button>
        <Button className=' bg-transparent text-[var(--headColor)]'>
          Ongoing
        </Button>
      </div>
    </div>
  );
};

export default PositionCard;
