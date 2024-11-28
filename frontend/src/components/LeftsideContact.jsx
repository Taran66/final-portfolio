import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const LeftsideContact = () => {
  return (
    <div className='text-white flex flex-col gap-20 md:gap-10 w-full md:w-auto'>
      <h2 className='text-4xl md:text-6xl lg:text-7xl'>Contact Me</h2>
      <div className='flex gap-4 md:gap-10 items-center'>
        <SiGmail className='text-2xl md:text-4xl' />
        <p className='text-lg md:text-2xl'>taranpreet1911@gmail.com</p>
      </div>
      
      <div className='flex gap-6 md:gap-20 text-2xl md:text-4xl'>
        <a href="https://www.instagram.com/_taran._.singh_/" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/taran-saini/" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Taran66" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaGithub />
        </a>
      </div>
      <button type='submit' className='text-lg md:text-2xl bg-amber-400 rounded-md w-full md:w-8/12 p-3 text-black hover:bg-amber-500 duration-300 ease-in-out'>Download CV</button>
    </div>
  );
};

export default LeftsideContact;
