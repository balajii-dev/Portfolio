import React, { useState } from "react"; // Added useState
import { Link as ScrollLink } from "react-scroll";

const Projects = () => {
  // Track the index of the flipped card
  const [flippedCard, setFlippedCard] = useState(null);

  const projectList = [
    {
      title: "Counter App",
      frontBg: "bg-gradient-to-br from-blue-600 to-indigo-500",
      description: "A simple Counter App to increase, decrease, and reset numbers easily. Clean design with real-time updates.",
      link: "https://counter-rouge-nu.vercel.app/",
      isInternal: false
    },
    {
      title: "E-Commerce App",
      frontBg: "bg-gradient-to-br from-green-600 to-teal-500",
      description: "A full-stack E-Commerce Grocery App where users can browse products, add items to cart, and place orders securely. Features complete frontend and backend integration with authentication, product management, and smooth order processing with responsive UI",
      link: "https://balaji-mart-e-commerce-application.vercel.app/",
      isInternal: false
    },
    {
      title: "My Portfolio",
      frontBg: "bg-gradient-to-br from-purple-700 to-pink-600",
      description: "A professional developer showcase featuring smooth scrolling, Tailwind CSS, and interactive 3D components.",
      link: "About", 
      isInternal: true
    }
  ];

  const handleCardClick = (index) => {
    // If clicking the already flipped card, close it; otherwise, flip the new one
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="Project" className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="md:pl-28 mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider">
            My <span className="text-green-500">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(index)} // Click handler for mobile
              className="group w-72 h-96 [perspective:1000px] cursor-pointer"
            >
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
                ${flippedCard === index ? '[transform:rotateY(180deg)]' : ''} 
                group-hover:[transform:rotateY(180deg)]`}
              >
                
                {/* Front Side */}
                <div className={`absolute w-full h-full [backface-visibility:hidden] rounded-xl border-2 border-gray-800 overflow-hidden ${project.frontBg} shadow-xl`}>
                  <div className="bg-black/20 w-full h-6 border-b border-white/10"></div>
                  <div className="flex flex-col items-center justify-center h-[calc(100%-1.5rem)] text-white p-6">
                    <div className="bg-white/10 p-4 rounded-2xl mb-4 backdrop-blur-sm">
                        <i className="fa-solid fa-laptop-code text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-center tracking-tight uppercase px-2">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-xs opacity-70 md:hidden italic text-center">Tap to see details</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-xl bg-gray-800 text-white border-2 border-green-500 [transform:rotateY(180deg)] p-6 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                  <h3 className="text-xl font-bold text-green-500 mb-4">{project.title}</h3>
                  <p className="text-sm text-gray-300 text-center leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="w-full" onClick={(e) => e.stopPropagation()}> 
                    {/* stopPropagation prevents the card from flipping back when clicking the button */}
                    {project.isInternal ? (
                      <ScrollLink 
                        to={project.link} 
                        smooth={true} 
                        duration={500}
                        className="block w-full text-center py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors uppercase text-xs tracking-widest active:scale-95"
                      >
                        View Live
                      </ScrollLink>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors uppercase text-xs tracking-widest active:scale-95"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;