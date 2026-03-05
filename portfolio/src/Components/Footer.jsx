import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-10 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-tighter ">
            Develop<span className="text-green-500">er</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          <Link to="About" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer transition">About</Link>
          <Link to="Skills" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer transition">Skills</Link>
          <Link to="Project" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer transition">Projects</Link>
          {/* Added Experience Link */}
          <Link to="Experience" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer transition">Experience</Link>
          <Link to="Contact" smooth={true} duration={500} className="hover:text-green-500 cursor-pointer transition">Contact</Link>
        </div>

        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end gap-5 mb-3">
            <a href="https://github.com/balajii-dev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition text-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/balajii-c/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition text-xl">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/917358832705" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition text-xl">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <p className="text-gray-600 text-xs tracking-wide">
            © {currentYear} Balaji. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
