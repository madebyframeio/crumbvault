import Image from 'next/image'
import logo from '../../public/logo.png'
import banner from '../../public/banner.png'
import gdpr from '../../public/gdpr.png'
import oneline from '../../public/oneline.png'
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from 'react-icons/md'

const Home = () => {
  const date = new Date()
  return (
    <div>
      <main className='flex flex-col justify-center items-center pt-12 lg:px-36 md:px-14 px-5 text-center'>
          <div>
            <Image src={logo} alt='Crumbvault logo' className='w-44 h-7' />
          </div>
          <div className='lg:px-12 md:px-20 mt-12'>
            <h1 className='font-medium text-5xl md:text-7xl lg:px-52 mb-4 bg-linear-to-r from-[#2C2416] via-[#8664FF] to-[#2C2416] bg-clip-text text-transparent'>The Smarter Way To Handle Cookie Banners</h1>
            <p className='text-[#929292] text-xl mb-8 lg:px-48'>
              CrumbVault enables quick, privacy friendly cookie banners and lets users manage cookie preferences securely.
            </p>
          </div>
          <div className='w-full lg:px-36 md:px-38 mb-6'>
            <form action="" className='flex flex-col md:flex-row gap-4 w-full lg:px-40 mb-4'>
              <div className='relative md:w-2/3'>
                <MdMailOutline className='absolute left-2.5 top-1/2 -translate-y-1/2 text-[#000000] font-black w-5 h-4' />
                <input type="text" placeholder='e.g dominic@mail.com' className='p-3 pl-8 rounded-xl shadow-2xl w-full border-t border-t-[#F0F2F4] focus:outline-none' />
              </div>
              <button type="submit" className='cursor-pointer md:w-1/3 p-3 bg-[#8664FF] text-white rounded-2xl'>Get Started</button>
            </form>
            <p>Join <span className='text-[#8664FF]'>30+</span> early adopters waiting for launch</p>
          </div>
          <div className='mt-6 flex bg-linear-to-r from-[#8664FF0D] to-[#F5C96C0D] py-2 px-4 text-left border border-[#D9B48F33] rounded-2xl lg:mx-80 md:mx-42'>
            <div className='w-1/3'>
              <p className='font-bold'>Love Cookies?</p>
            </div>
            <div className='w-2/3'>
              <p className='text-[#929292]'>Share CrumbVault with friends and get early access perks!</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mt-12'>
            <div className='border border-[#F0F2F4] p-3 flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={banner} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-bold'>Beautiful Banners</h2>
                  <p className='#929292'>Customizable consent widgets that match your brand perfectly</p>
                </div>
            </div>
            <div className='border border-[#F0F2F4] p-3 flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={gdpr} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-bold'>GDPR & CCPA Ready</h2>
                  <p className='#929292'>Built-in compliance tools to keep you on the right side of privacy laws</p>
                </div>
            </div>
            <div className='border border-[#F0F2F4] p-3 flex flex-col justify-center items-center md:w-1/3 lg:w-72 h-56 rounded-3xl'>
                <Image src={oneline} alt='Beautiful Banners Image' className='w-20 h-20 mb-6' />
                <div>
                  <h2 className='font-bold'>One Line Setup</h2>
                  <p className='#929292'>Add CrumbVault to your site in seconds with our simple integration</p>
                </div>
            </div>
          </div>
      </main>
      <footer className='flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center border border-[#F0F2F410] md:px-[100px] lg:py-[50px] py-5 mt-20'>
        <div>
          <p className='text-[#929292]'>&copy; {date.getFullYear()} Crumbvault</p>
        </div>
        <div className='md:pl-24 hidden md:block'>
          <p><FaXTwitter className='cursor-pointer w-10 h-10 p-2 rounded-full text-white bg-black' /></p>
        </div>
        <div>
          <p>Questions?? <span className='text-[#8668ef]'>hello@crumbvault.com</span></p>
        </div>
        <div className='md:pl-24 md:hidden'>
          <p><FaXTwitter className='cursor-pointer md:w-8 md:h-8 md:p-1 w-10 h-10 p-2 rounded-full text-white bg-black' /></p>
        </div>
      </footer>
    </div>
  )
}

export default Home