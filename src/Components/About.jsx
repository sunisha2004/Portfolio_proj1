import React from 'react';
import { useInView } from 'react-intersection-observer';
import image from '/mee1.jpg';

const About = () => {
    const heading = "About Me";
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: false, 
        threshold: 0.5,
    });

    return (
        <section
            id="about"
            className="bg-white text-black p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center md:items-start"
        >
            <div className="md:w-1/3 w-full mb-6 md:mb-0 flex justify-center">
                <img
                    src={image}
                    alt="About Me"
                    className="rounded-lg shadow-md max-w-full"
                />
            </div>

            <div className="md:w-2/3 w-full md:pl-8">
                <h2
                    ref={headingRef}
                    className="text-4xl font-extrabold text-center mb-8 text-black"
                >
                    {heading.split("").map((char, index) => (
                        <span
                            key={index}
                            className={`inline-block ${
                                headingInView
                                    ? `opacity-100 transform transition-all duration-500 ease-out delay-[${index * 100}ms] translate-x-0`
                                    : "opacity-0 transform translate-x-8"
                            }`}
                        >
                            {char}
                        </span>
                    ))}
                </h2>
                <div className="space-y-6">
                    <p className="text-sm leading-relaxed">
                        I am a passionate and detail-oriented <span className="font-semibold">MERN Stack Developer</span>, 
                        eager to kickstart my career in web development. With a solid foundation in 
                        <span className="font-semibold"> MongoDB, Express.js, React.js,</span> and 
                        <span className="font-semibold"> Node.js</span>, I possess a strong understanding of both 
                        front-end and back-end development.
                    </p>
                    <p className="text-sm leading-relaxed">
                        My experience includes building dynamic and responsive web applications, creating 
                        <span className="font-semibold"> RESTful APIs</span>, and implementing robust database solutions. 
                        Here are some of my key skills:
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-2">
                        <li>Proficiency in <span className="font-semibold">JavaScript, HTML, and CSS</span></li>
                        <li>Experience with <span className="font-semibold">React.js</span> for building interactive user interfaces</li>
                        <li>Knowledge of <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span> for server-side logic</li>
                        <li>Familiarity with <span className="font-semibold">MongoDB</span> for database management</li>
                    </ul>
                    <p className="text-sm leading-relaxed">
                        I am enthusiastic about learning new technologies, solving complex problems, and collaborating in a team environment. 
                        My goal is to grow as a professional while contributing to innovative and impactful projects.
                    </p>
                    <p className="text-sm leading-relaxed text-center md:text-left">
                        <span className="font-semibold">Let’s connect!</span> I’m excited to explore modern web technologies together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
