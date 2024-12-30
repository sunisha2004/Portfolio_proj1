import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gradient-to-br from-gray-50 to-white text-black p-8 rounded-lg shadow-xl mb-8">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-black">Contact</h2>
            <p className="text-center text-lg mb-6">
                Feel free to reach out to me on the following platforms or via email:
            </p>
            <div className="flex flex-col items-center space-y-4">
                <a 
                    href="https://www.linkedin.com/in/sunisha-m-2535502b3" 
                    className="text-xl font-medium text-blue-500 underline hover:text-blue-700 transition duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/sunisha2004" 
                    className="text-xl font-medium text-blue-500 underline hover:text-blue-700 transition duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a 
                    href="mailto:sunisha@example.com" 
                    className="text-xl font-medium text-blue-500 underline hover:text-blue-700 transition duration-300"
                >
                    Email: sunishams2004@gmail.com
                </a>
            </div>
        </section>
    );
};

export default Contact;
