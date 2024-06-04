import H1 from '@/components/H1';
import BenefitCard from '@/components/benefit-card';
import P from '@/components/p';
import React from 'react';

const BenefitSection = () => {
  const benefits = [
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/health.png',
    },
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/mac-pro.png',
    },
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/kind.png',
    },
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/development.png',
    },
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/insurance.png',
    },
    {
      title: 'Competitive salary',
      description:
        'We offer competitive salary and benefits for all our employees.',
      icon: '/images/leave.png',
    },
  ];
  return (
    <section className='text-start lg:my-12 my-6  container mx-auto'>
      <H1>Benefits</H1>
      <P>
        In addition to a competitive salary, here're a few resources we <br />{' '}
        offer to help our team excel.
      </P>
      <div className='grid grid-cols-1 xl:grid-cols-3 3xl:grid-cols-3 gap-12 mt-12'>
        {benefits.map((benefit, index) => {
          return (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              Icon={benefit.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BenefitSection;
