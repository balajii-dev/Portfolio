import React from 'react';
import { Link } from 'react-scroll';

const TopContent = () => {
  return (
    /* CHANGE: Removed fixed large padding. 
       Used px-6 (mobile) and md:pl-20 (desktop) to ensure text fits the screen.
    */
    <div className='px-6 pt-32 md:pl-20 md:pt-60 lg:pl-40 flex flex-col items-center md:items-start text-center md:text-left'> 
        <div>
            {/* CHANGE: text-4xl (mobile) scaling to text-7xl (desktop) 
               so the name stays on the screen.
            */}
            <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-7xl font-serif hover:text-black transition-colors duration-300 leading-tight'>
              Mr. Balaji C
            </h1>
            <p className='text-gray-800 font-bold text-lg md:text-2xl mt-3 mb-8 max-w-md md:max-w-xl'>
              A Professional <span className='text-green-500'>MERN Stack</span> Web Developer
            </p>
        </div>
        
        {/* Button Container */}
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            {/* CHANGE: Linked to your local public file. 
               The 'download' attribute triggers the actual file download.
            */}
            <a 
              href="/Balaji_C_Resume.pdf" 
              download="Balaji_C_Resume.pdf" 
              className='w-full sm:w-auto'
            >
                <button className='w-full bg-green-500 px-8 py-3 rounded-lg font-bold hover:bg-green-400 active:scale-95 transition-all text-black shadow-lg shadow-green-900/40 uppercase tracking-wider'>
                  Download CV
                </button>
            </a>

            <Link to='Projects' smooth={true} duration={500} className='w-full sm:w-auto'>
                <button className='w-full border-2 border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black active:scale-95 transition-all font-bold uppercase tracking-wider'>
                  My Work
                </button>
            </Link>
        </div>
    </div>
  );
};

export default TopContent;