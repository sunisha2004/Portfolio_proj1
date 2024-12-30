import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 animate-bounce hover:animate-spin" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 animate-bounce hover:animate-spin" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 animate-bounce hover:animate-spin" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 animate-bounce hover:animate-spin" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 animate-bounce hover:animate-spin" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400 animate-bounce hover:animate-spin" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 animate-bounce hover:animate-spin" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 animate-bounce hover:animate-spin" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600 animate-bounce hover:animate-spin" /> },
  ];

  return (
    <section id="skills" className="w-full bg-white text-black p-8 shadow-lg mb-8">
      <div className="p-8 rounded-lg">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-black">My Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              <div className="text-6xl mb-2">{skill.icon}</div>
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
