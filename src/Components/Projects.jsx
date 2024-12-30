import React from "react";
import { FaShoppingCart, FaHeartbeat, FaInstagram, FaListAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-50 to-white text-black p-8 rounded-lg shadow-xl mb-8"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-black animate-fadeIn">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 animate-slide-in-left">
          <div className="text-blue-500 text-4xl mb-4">
            <FaShoppingCart className="animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">E-commerce Website</h3>
          <p className="text-gray-700">
            A responsive e-commerce website built with HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 animate-slide-in-right">
          <div className="text-red-500 text-4xl mb-4">
            <FaHeartbeat className="animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">Blood Donor</h3>
          <p className="text-gray-700">
            Created a Blood Donor Website using HTML, CSS, JavaScript, Node.js, and MongoDB.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 animate-slide-in-left">
          <div className="text-pink-500 text-4xl mb-4">
            <FaInstagram className="animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">Instagram Clone</h3>
          <p className="text-gray-700">
            Built an Instagram Clone using HTML, CSS, JavaScript, Express.js, and MongoDB.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 animate-slide-in-right">
          <div className="text-green-500 text-4xl mb-4">
            <FaListAlt className="animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">OLX Clone</h3>
          <p className="text-gray-700">
            Built an OLX Clone using React.js, CSS, JavaScript, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
