'use client'
import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Footer = () => {

  useEffect(() => {
    const handleScrollToFooter = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Check if there is a hash in the URL indicating a scroll to the footer
    if (window.location.hash === '#footer') {
      handleScrollToFooter();
    }
  }, []);


  return (
    <footer id='footer' className='transition-all duration-500 transform '>
      <div className='container mx-auto px-4 mt-6'>
      <Link href ='/' className='font-bold text-2xl text-cyan-600 hover:text-blue-600'>
      Hotel<span className="text-orange-500">z</span><span className="text-purple-500">z</span>
    </Link>

        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p>123 Road</p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>code with Shariq</p>
            </div>
            <div className='flex items-center'>

              <BsTelephoneOutbound />
              <p className='ml-2'>000-000-00</p>
            </div>
            <div className='flex items-center pt-4'>
              <BiMessageDetail />
              <p className='ml-2'>codewithlari</p>
            </div>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>Our Story</p>
            <p className='pb-4'>Get in Touch</p>
            <p className='pb-4'>Our Privacy Commitment</p>
            <p className='pb-4'>Terms of service</p>
            <p>Customer Assistance</p>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>Dining Experience</p>
            <p className='pb-4'>Wellness</p>
            <p className='pb-4'>Fitness</p>
            <p className='pb-4'>Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;