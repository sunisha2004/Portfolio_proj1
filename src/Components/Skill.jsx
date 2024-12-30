import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  ];

  return (
    <section id="skills" className="bg-white text-black p-8 rounded-lg shadow-lg mb-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
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
