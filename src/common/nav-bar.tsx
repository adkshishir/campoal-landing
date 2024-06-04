'use client';
import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar bg-base-100 min-h-[10vh] w-full'>
      <div className='navbar-start '>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost xl:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[15px] flex flex-col justify-center items-center text-center gap-2 font-semibold px-1'>
            <li className='lg:hidden'>
            <Button className='flex gap-2 text-lg rounded-3xl  items-center !py-[6px] px-6 bg-white border border-[#eaeaea] text-[var(--headColor)]'>
            <AiOutlineGlobal />
            Global
          </Button>
            </li>
            <li>
              <Link href='/'>
                <FaSearch />
                Search
              </Link>
            </li>
            <li>
              <Link href='/'>Campaigns</Link>
            </li>
            <li>
              <Link href={'/'}>Fundriser</Link>
            </li>
            <li>
              <Link href={'/'}>Membershiip</Link>
            </li>
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
            <li>
              <Link href={'/'}>Blog</Link>
            </li>
            <li className='w-full'>
              <Button className=' w-full !py-2 px-8 bg-[var(--primary)] text-white'>
                Start a Campaign
              </Button>
            </li>
            <li className='w-full '>
              <Button className='flex justify-center items-center gap-2 w-full py-2 px-8  bg-[var(--secondary)]'>
                <div>Sign up</div>
              </Button>
            </li>
            <li className='w-full'>
              <Button className=' !py-2 px-8  bg-[var(--primary)] text-white w-full flex justify-center  '>
                <div className=''>Sign in</div>
              </Button>
            </li>
          </ul>
        </div>
        <div className='flex  items-center '>
          <a className=' text-2xl -mt-2'>
            <Image
              src={'/images/logo.png'}
              alt='logo'
              width={600}
              height={600}
              className='w-full h-full '
            />
          </a>
          <Button className='flex gap-2 max-lg:hidden text-lg rounded-3xl  items-center !py-[6px] px-6 bg-white border border-[#eaeaea] text-[var(--headColor)]'>
            <AiOutlineGlobal />
            Global
          </Button>
        </div>
      </div>
      <div className='navbar-center hidden xl:flex'>
        <ul className='menu menu-horizontal text-lg font-semibold px-1'>
          <li>
            <Link href='/'>
              <FaSearch />
              Search
            </Link>
          </li>
          <li>
            <Link href='/'>Campaigns</Link>
          </li>
          <li>
            <Link href={'/'}>Fundriser</Link>
          </li>
          <li>
            <Link href={'/'}>Membershiip</Link>
          </li>
          <li>
            <Link href={'/'}>About</Link>
          </li>
          <li>
            <Link href={'/'}>Contact</Link>
          </li>
          <li>
            <Link href={'/'}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end gap-2 lg:flex hidden '>
        <Button className='  !py-2 px-8 bg-[var(--primary)] text-white'>
          Start a Campaign
        </Button>
        <div className='join'>
          <Button className=' py-2 px-8  join-item bg-[var(--secondary)]'>
            Sign up
          </Button>

          <Button className='  !py-2 px-8  join-item bg-[var(--primary)] text-white'>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
