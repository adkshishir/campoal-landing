import Image from 'next/image';
import React from 'react';
type Props = {
  title: string;
  description: string;
  Icon: string;
};
const BenefitCard = (props: Props) => {
  const { title, description, Icon } = props;
  return (
    <div className='text-start rounded-2xl flex gap-4 flex-col justify-between  bg-white  shadow-lg p-12'>
      <Image height={100} width={100} src={Icon} alt='icon' />
      <h3 className='xl:text-3xl text-xl font-semibold text-[var(--headColor)]'>
        {title}
      </h3>
      <h4 className='xl:text-xl text-md font-semibold text-[var(--headColor)]'>
        {description}
      </h4>
    </div>
  );
};

export default BenefitCard;
