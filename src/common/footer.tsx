import H1 from '@/components/H1';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaMagento, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='bg-[var(--dark)] text-white py-12'>
      <footer className='footer  p-10 container mx-auto  '>
        <aside>
          <h1 className='text-lg font-semibold '>What is Campoal?</h1>
          <p className='text-md font-medium'>
            Campoal is a completed WordPress theme used to create Petition{' '}
            <br />
            Platform, Foundation and Non-profit website where anyone can be{' '}
            <br />
            start a social movement, collect supporters and fundraising to{' '}
            <br />
            change something in society.
          </p>
          <Image
            src={'/images/payment-patners.png'}
            width={400}
            alt='payment partners'
            className='mt-4'
            height={400}
          />
        </aside>
        <nav className='text-md font-medium'>
          <h6 className='text-lg font-semibold'>Company</h6>
          <a className='link link-hover'>About</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Careers</a>
          <a className='link link-hover'>Impact</a>
          <a className='link link-hover'>Testimonials</a>
          <a className='link link-hover'>Team Members</a>
        </nav>
        <nav className='text-md font-medium'>
          <h6 className='text-lg font-semibold'>Resource</h6>
          <a className='link link-hover'>Guide</a>
          <a className='link link-hover'>FAQS</a>
          <a className='link link-hover'>Press Kets</a>
          <a className='link link-hover'>Complaince</a>
          <a className='link link-hover'>Privacy Policy</a>
          <a className='link link-hover'>Terms and Conditions</a>
        </nav>
        <nav className='text-md font-medium'>
          <h6 className='text-lg font-semibold'>Community</h6>
          <a className='link link-hover'>Shop</a>
          <a className='link link-hover'>Blog</a>
          <a className='link link-hover'>Forum</a>
          <a className='link link-hover'>Membership</a>
          <a className='link link-hover'>Help Center</a>
          <a className='link link-hover'>Support desk</a>
        </nav>
      </footer>
      {/* Copyright */}
      <footer className='footer footer-center container mx-auto p-4 bg-[var(--dark)] text-white'>
        <div className='md:flex justify-between w-full items-center'>
          <h1 className='text-lg font-semibold'>
            © 2021 Campoal. Powered by Conikal LLC
          </h1>
        <div className='flex gap-4'>
            <FaFacebook className='text-white text-3xl'/>
            <FaTwitter className='text-white text-3xl'/>
            <FaYoutube className='text-white text-3xl'/>
            <FaMagento className='text-white text-3xl'/>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
