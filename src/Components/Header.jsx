import React from 'react';
import image from '../../public/back.avif';

const Header = () => {
    return (
        <div
            className="relative w-full h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
        >
          
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

           
            <div
                className="relative z-10 text-center text-white animate-fadeIn"
                style={{ animationDuration: "1.5s" }}
            >
                <h1
                    className="text-6xl font-bold animate-slideDown"
                    style={{ animationDuration: "1.5s" }}
                >
                    Sunisha M
                </h1>
                <p
                    className="text-2xl mt-4 animate-slideUp"
                    style={{ animationDuration: "2s" }}
                >
                    Web Developer & Designer
                </p>
                <a href="#contact">
                    <button className="mt-6 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out animate-pulse">
                        Contact Me
                    </button>
                </a>
            </div>

          
            <nav className="absolute top-5 left-0 right-0 flex justify-center space-x-8 text-lg font-medium text-white">
                <a
                    href="#about"
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Projects
                </a>
                <a
                    href="#skills"
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Skills
                </a>
                <a
                    href="#contact"
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Header;