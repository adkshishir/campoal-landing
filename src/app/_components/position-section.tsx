import H1 from '@/components/H1';
import P from '@/components/p';
import PositionCard from '@/components/positions-card';
import React from 'react';

const PositionSection = () => {
  const positions = [
    {
      title: 'Product Manager, South Africa Expansion',
      description:
        "As the Product Manager for our South African expansion efforts, you’ll be responsible for driving product innovation in South Africa that'll be targeted and helping out merchants start and scale their businesses. You’ll be the voice of the customer and will help build and maintain delightfully successful products that solve our users' pain points.",
      keywords: ['Product', 'Full-time', 'South Africa'],
    },
    {
      title: 'Head of Compliance and Risk',
      description:
        "As the Product Manager for our South African expansion efforts, you’ll be responsible for driving product innovation in South Africa that'll be targeted and helping out merchants start and scale their businesses. You’ll be the voice of the customer and will help build and maintain delightfully successful products that solve our users' pain points.",
      keywords: ['Product', 'Full-time', 'South Africa'],
    },
    {
      title: 'Senior Autiomation Engineer',
      description:
        "As the Product Manager for our South African expansion efforts, you’ll be responsible for driving product innovation in South Africa that'll be targeted and helping out merchants start and scale their businesses. You’ll be the voice of the customer and will help build and maintain delightfully successful products that solve our users' pain points.",
      keywords: ['Product', 'Full-time', 'South Africa'],
    },
    {
      title: 'Automation Engineer',
      description:
        "As the Product Manager for our South African expansion efforts, you’ll be responsible for driving product innovation in South Africa that'll be targeted and helping out merchants start and scale their businesses. You’ll be the voice of the customer and will help build and maintain delightfully successful products that solve our users' pain points.",
      keywords: ['Product', 'Full-time', 'South Africa'],
    },
  ];
  return (
    <section className='text-start lg:my-12  container mx-auto'>
      <H1>Open positions</H1>
      <P>Come join the team !</P>
      <div className='grid grid-cols-1 xl:mt-12 mt-6 gap-12 '>
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            title={position.title}
            description={position.description}
            keywords={position.keywords}
          />
        ))}
      </div>
    </section>
  );
};

export default PositionSection;
