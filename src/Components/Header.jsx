import React from 'react';
import image from '../../public/back.avif';

const Header = () => {
    const handleNavigation = (e) => {
        
        e.preventDefault();
        
        window.location.href = e.target.href;
    };

    return (
        <div
            className="relative w-full h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
        >
         
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

           
            <div className="relative z-10 text-center text-white">
                <h1
                    className="text-6xl font-bold animate-slide-in-left"
                    style={{ animationDuration: "1.5s" }}
                >
                    Sunisha M
                </h1>
                <p
                    className="text-2xl mt-4 animate-slide-in-right"
                    style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
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
                    onClick={handleNavigation}
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    About
                </a>
                <a
                    href="#projects"
                    onClick={handleNavigation}
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Projects
                </a>
                <a
                    href="#skills"
                    onClick={handleNavigation}
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Skills
                </a>
                <a
                    href="#contact"
                    onClick={handleNavigation}
                    className="hover:text-gray-300 transition duration-300 ease-in-out hover:scale-105"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Header;
