import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiWellfound } from "react-icons/si";

const LeftsideContact = () => {
  return (

      
      <div className='flex justify-between gap-6 md:gap-32 text-2xl md:text-5xl'>
        
        <a href="https://www.linkedin.com/in/taran-saini/" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Taran66" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaGithub />
        </a>
        <a href="https://wellfound.com/u/taranpreet-singh-29" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <SiWellfound />
        </a>
        <a href="https://www.instagram.com/_taran._.singh_/" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaInstagram />
        </a>
        <a href="https://x.com/Singh7aran" className='hover:-translate-y-1 hover:text-amber-400 duration-300 ease-in-out'>
          <FaXTwitter />
        </a>
      </div>
    
  );
};

export default LeftsideContact;
