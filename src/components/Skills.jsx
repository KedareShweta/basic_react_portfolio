import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 80, technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js'] },
    { name: 'Backend Development', percentage: 60, technologies: ['Node.js', 'Express.js'] },
    { name: 'Database Management', percentage: 40, technologies: ['MongoDB'] }
  ];

  const SkillBar = ({ skill, percentage, technologies }) => {
    return (
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-lg">{skill}</span>
          <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div 
            className={`h-4 rounded-full transition-all duration-1000 ease-out ${
              document.documentElement.classList.contains('dark')
                ? 'bg-dark-primary' 
                : 'bg-light-primary'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                document.documentElement.classList.contains('dark')
                  ? 'bg-gray-800 text-dark-primary' 
                  : 'bg-gray-100 text-light-primary'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index}
              skill={skill.name}
              percentage={skill.percentage}
              technologies={skill.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;