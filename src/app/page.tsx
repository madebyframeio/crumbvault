'use client'

import Image from 'next/image'
import logo from '../../public/logo.png'
import banner from '../../public/banner.png'
import gdpr from '../../public/gdpr.png'
import oneline from '../../public/oneline.png'
import { FaXTwitter } from "react-icons/fa6";
import mail from '../../public/mail-line.svg'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect, useState } from 'react'

const Home = () => {
  const date = new Date()
  const [state, handleSubmit] = useForm("mblqlzep");
  const [email, setEmail] = useState('')
  
  function TemporaryMessage() {
      const [visible, setVisible] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
      }, []);
    
      return visible ? (
        <p className="pb-2 text-[#8664FF]">Thanks for joining the waitlist</p>
      ) : null;
  }
   useEffect(() => {
    if (state.succeeded) {
      setEmail("");
    }
  }, [state.succeeded]);

  return (
    <div>
      <main className='flex flex-col justify-center items-center pt-12 lg:px-36 md:px-14 px-5 text-center'>
          <div>
            <Image src={logo} alt='Crumbvault logo' className='w-44 h-7' />
          </div>
          <div className='lg:px-12 md:px-20 mt-12'>
            <h1 className='font-medium text-5xl md:text-7xl lg:px-52 mb-4 bg-linear-to-r from-[#2C2416] via-[#8664FF] to-[#2C2416] bg-clip-text text-transparent'>The Smarter Way To Handle Cookie Banners</h1>
            <p className='text-[#929292] mb-8 lg:px-48'>
              CrumbVault enables quick, privacy friendly cookie banners and lets users manage cookie preferences securely.
            </p>
          </div>
          <div className='w-full lg:px-36 md:px-38 mb-6'>
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-4 w-full lg:px-42 mb-4'>
              <div className='relative md:w-2/3'>
                <Image src={mail} alt='mail icon' className='absolute left-2.5 top-1/2 -translate-y-1/2 text-[#000000] font-black w-5 h-4' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='e.g dominic@mail.com' className='py-3 pl-8 rounded-xl shadow-2xl w-full border-t border-t-[#F0F2F4]' />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <button type="submit" disabled={state.submitting} className='hover:bg-[#9a7ffa] flex items-center justify-center text-center cursor-pointer md:w-35 p-3 bg-[#8664FF] text-white rounded-2xl'>
                Get Started 
                <svg className='text-white w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </button>
            </form>
            {state.succeeded && <TemporaryMessage />}
            <p>Join <span className='text-[#8664FF]'>30+</span> early adopters waiting for launch</p>
          </div>
          <div className='mt-6 flex gap-1 md:gap-0 bg-linear-to-r from-[#8664FF0D] to-[#F5C96C0D] py-2 px-4 text-left border border-[#D9B48F33] rounded-2xl lg:mx-80 md:mx-42'>
            <div className='w-1/3 '>
              <p className='font-medium'>Love Cookies?</p>
            </div>
            <div className='w-2/3 md:w-3/4'>
              <p className='text-[#929292] text-[15px]'>Share CrumbVault with friends and get early access perks!</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-12'>
            <div className='border border-[#F0F2F4] p-3 px-5 text-[14px] flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={banner} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-medium text-[20px] mb-2'>Beautiful Banners</h2>
                  <p className='text-[#929292]'>Customizable consent widgets that match your brand perfectly</p>
                </div>
            </div>
            <div className='border border-[#F0F2F4] p-3 px-5 text-[14px] flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={gdpr} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-medium text-[20px] mb-2'>GDPR & CCPA Ready</h2>
                  <p className='text-[#929292]'>Built-in compliance tools to keep you on the right side of privacy laws</p>
                </div>
            </div>
            <div className='border border-[#F0F2F4] p-3 px-5 text-[14px] flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={oneline} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-medium text-[20px] mb-2'>One Line Setup</h2>
                  <p className='text-[#929292]'>Add CrumbVault to your site in seconds with our simple integration</p>
                </div>
            </div>
          </div>
      </main>
      <footer className='flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center border border-[#F0F2F410] md:px-[100px] lg:py-[50px] py-5 mt-20'>
        <div>
          <p className='text-[#929292]'>&copy; {date.getFullYear()} Crumbvault</p>
        </div>
        <div className='md:pl-24 hidden md:block'>
          <Link target='_blank' rel='noopener noreferrer' href='https://x.com/usecrumbvault'><p><FaXTwitter className='cursor-pointer w-10 h-10 p-2 rounded-full text-white bg-black' /></p></Link>
        </div>
        <div>
          <Link rel='noopener noreferrer' href='mailto:hello@crumbvault.xyz'><p>Questions?? <span className='text-[#8668ef] hover:underline'>hello@crumbvault.xyz</span></p></Link>
        </div>
        <div className='md:pl-24 md:hidden'>
          <Link target='_blank' rel='noopener noreferrer' href='https://x.com/usecrumbvault'><p><FaXTwitter className='cursor-pointer md:w-8 md:h-8 md:p-1 w-10 h-10 p-2 rounded-full text-white bg-black' /></p></Link>
        </div>
      </footer>
    </div>
  )
}

export default Home