import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      organization: "STARNXT Solutions LLP",
      duration: "Dec 2025 - Feb 2026",
      location: "Coimbatore",
      description: "Collaborating with a team of developers to build responsive UI components using React and Tailwind CSS. Assisting in API integration and bug fixing.",
      tags: [ "JavaScript", "React", "Node", "Express", "MongoDB", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Data Science & Machine Learning Course",
      organization: "KaaShiv Infotech",
      duration: "May 2025 - Nov 2025",
      location: "Chennai",
      description: "Where I learned to analyze complex datasets and extract meaningful insightsI also built predictive models and applied algorithms to solve real-world problems using data-driven approaches.",
      tags: ["Python","Pandas","NumPy","Matplotlib","Seaborn","Scikit-learn","TensorFlow","Keras","NLP","Excel","MS SQL","Tkinter"]
    },
  
  ];

  return (
    <section id="Experience" className="bg-gray-900 pt-30  px-6 md:px-20 text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-extrabold text-white">
            Experience & <span className="text-green-500">Certifications</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">A timeline of my professional growth</p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-green-500/30 ml-3 md:ml-6">
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] mt-1.5 h-6 w-6 rounded-full bg-black border-4 border-green-500 shadow-[0_0_10px_#22c55e]"></div>

              {/* Experience Card */}
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-green-500 font-mono text-sm bg-green-500/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-gray-300 font-semibold mb-3 flex items-center">
                  <i className="fa-solid fa-building mr-2 text-sm"></i> {exp.organization} 
                  <span className="mx-2 text-gray-600">|</span> 
                  <span className="text-gray-400 text-sm italic">{exp.location}</span>
                </h4>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest bg-gray-900 border border-gray-700 text-gray-300 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;