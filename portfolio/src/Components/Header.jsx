import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = ({ onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "relative cursor-pointer font-bold transition-all duration-300 hover:text-green-500 py-2 group";
  const underlineClasses = "absolute bottom-0 left-0 w-full h-[3px] bg-green-500 scale-x-0 transition-transform duration-300 group-[.active]:scale-x-100 group-hover:scale-x-100";

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: 'About', label: 'About Me' },
    { to: 'Skills', label: 'Skills' },
    { to: 'Project', label: 'Projects' },
    { to: 'Experience', label: 'Experience' },
    { to: 'Contact', label: 'Contact' },
  ];

  return (
    <nav className='flex bg-black h-20 text-white items-center shadow-2xl sticky top-0 z-[100] px-6 md:px-10 justify-between'>
      <div className='text-2xl md:text-3xl font-extrabold font-sans z-[110]'>
        <h1 className='cursor-default'>
          Develop<span className='text-green-600'>er</span>
        </h1>
      </div>
      <div className='hidden lg:flex items-center gap-8 font-sans uppercase text-sm tracking-wide'>
        {navLinks.map((link) => (
          <Link 
            key={link.to}
            to={link.to} 
            spy={true} 
            smooth={true} 
            duration={500} 
            activeClass="active" 
            className={linkClasses}
          >
            {link.label}
            <span className={underlineClasses}></span>
          </Link>
        ))}

        <button 
          onClick={onJoinClick}
          className='ml-4 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold transition transform active:scale-95 shadow-lg shadow-green-900/20 cursor-pointer'
        >
          Send Message
        </button>
      </div>
      <div className="lg:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-white focus:outline-none z-[110]"
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
      <div className={`fixed top-0 right-0 h-screen w-full bg-black transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out lg:hidden z-[105] flex flex-col items-center justify-center gap-8 shadow-2xl`}>
        {navLinks.map((link) => (
          <Link 
            key={link.to}
            to={link.to} 
            spy={true} 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            activeClass="text-green-500 underline decoration-2 underline-offset-8" 
            className="text-2xl font-bold uppercase tracking-widest hover:text-green-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        
        <button 
          onClick={() => { onJoinClick(); closeMenu(); }}
          className='bg-green-600 text-white px-10 py-4 rounded-full font-bold uppercase text-lg tracking-wider active:scale-90 transition-transform'
        >
          Send Message
        </button>
      </div>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md lg:hidden z-[102]"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Header;
