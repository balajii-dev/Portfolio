import React from "react";

const ContactContent = () => {
  return (

    <div className="py-32 md:py-40 flex flex-col items-center justify-center bg-gray-900 min-h-[60vh]">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 mb-4 tracking-wider">
          Let's Connect
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
           Feel free to reach out on any of these platforms!
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
        {/* Email */}
        <li className="group">
          <a target="_blank" rel="noopener noreferrer"
            href="mailto:balajimohan.c9@gmail.com"
            className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[3px] border-[#f0f9fe] bg-[#f0f9fe] overflow-hidden transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 bg-[#EA4335] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            <i className="fa-solid fa-envelope text-[2rem] text-[hsl(203,92%,8%)] transition-all duration-500 z-10 group-hover:text-white group-hover:rotate-[360deg]"></i>
          </a>
        </li>

        {/* Instagram */}
        <li className="group">
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.instagram.com/balaji.c___"
            className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[3px] border-[#f0f9fe] bg-[#f0f9fe] overflow-hidden transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            <i className="fa-brands fa-instagram text-[2rem] text-[hsl(203,92%,8%)] transition-all duration-500 z-10 group-hover:text-white group-hover:rotate-[360deg]"></i>
          </a>
        </li>

        {/* LinkedIn */}
        <li className="group">
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/balajii-c/"
            className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[3px] border-[#f0f9fe] bg-[#f0f9fe] overflow-hidden transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 bg-[#0077b5] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            <i className="fa-brands fa-linkedin text-[2rem] text-[hsl(203,92%,8%)] transition-all duration-500 z-10 group-hover:text-white group-hover:rotate-[360deg]"></i>
          </a>
        </li>

        {/* WhatsApp */}
        <li className="group">
          <a target="_blank" rel="noopener noreferrer"
            href="https://wa.me/917358832705"
            className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[3px] border-[#f0f9fe] bg-[#f0f9fe] overflow-hidden transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 bg-[#25D366] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            <i className="fa-brands fa-whatsapp text-[2rem] text-[hsl(203,92%,8%)] transition-all duration-500 z-10 group-hover:text-white group-hover:rotate-[360deg]"></i>
          </a>
        </li>

        {/* GitHub */}
        <li className="group">
          <a target="_blank" rel="noopener noreferrer"
            href="https://github.com/balajii-dev"
            className="relative flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-full border-[3px] border-[#f0f9fe] bg-[#f0f9fe] overflow-hidden transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 bg-black scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"></span>
            <i className="fa-brands fa-github text-[2rem] text-[hsl(203,92%,8%)] transition-all duration-500 z-10 group-hover:text-white group-hover:rotate-[360deg]"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactContent;
