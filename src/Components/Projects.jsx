import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-white text-black p-8 rounded-lg shadow-xl mb-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-black">Projects</h2>
      <ul className="space-y-8">
        <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-black mb-2">E-commerce Website</h3>
          <p className="text-gray-700">A responsive e-commerce website built with HTML, CSS, and JavaScript.</p>
        </li>
        <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-black mb-2">Blood Donor</h3>
          <p className="text-gray-700">Created a Blood Donor Website using HTML, CSS, JavaScript, Node.js, and MongoDB.</p>
        </li>
        <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-black mb-2">Instagram Clone</h3>
          <p className="text-gray-700">Built an Instagram Clone using HTML, CSS, JavaScript, Express.js, and MongoDB.</p>
        </li>
        <li className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold text-black mb-2">OLX Clone</h3>
          <p className="text-gray-700">Built an OLX Clone using React.js, CSS, JavaScript, and MongoDB.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
