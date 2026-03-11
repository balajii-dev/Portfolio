const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Bootstrap", level: 85 },
  { name: "Tailwind", level: 95 },
  { name: "Node & Express JS", level: 80 },
  { name: "Mongo DB", level: 90 }
];

const Skills = () => {
  return (


    <div className="px-4 sm:px-10 md:px-20 lg:px-[130px] pr-[40px] text-white pb-10">
      <h2 className="text-5xl font-extrabold mt-35 mb-15 text-white">
            My <span className="text-green-500">Skills</span>
          </h2>

      {skills.map((skill) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 ">
            <div
              className="bg-green-600 h-2 rounded-full "
              style={{ width: `${skill.level}%` }}
              
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
