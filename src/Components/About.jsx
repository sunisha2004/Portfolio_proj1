import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="bg-white text-black p-8 rounded-lg shadow-lg mb-8"
        >
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                    I am a passionate and detail-oriented <span className="font-semibold">MERN Stack Developer</span>, 
                    eager to kickstart my career in web development. With a solid foundation in 
                    <span className="font-semibold"> MongoDB, Express.js, React.js,</span> and 
                    <span className="font-semibold"> Node.js</span>, I possess a strong understanding of both 
                    front-end and back-end development.
                </p>
                <p className="text-lg leading-relaxed">
                    My experience includes building dynamic and responsive web applications, creating 
                    <span className="font-semibold"> RESTful APIs</span>, and implementing robust database solutions. 
                    Here are some of my key skills:
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Proficiency in <span className="font-semibold">JavaScript, HTML, and CSS</span></li>
                    <li>Experience with <span className="font-semibold">React.js</span> for building interactive user interfaces</li>
                    <li>Knowledge of <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span> for server-side logic</li>
                    <li>Familiarity with <span className="font-semibold">MongoDB</span> for database management</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    I am enthusiastic about learning new technologies, solving complex problems, and collaborating in a team environment. 
                    My goal is to grow as a professional while contributing to innovative and impactful projects.
                </p>
                <p className="text-lg leading-relaxed text-center">
                    <span className="font-semibold">Let’s connect!</span> I’m excited to explore modern web technologies together.
                </p>
            </div>
        </section>
    );
};

export default About;
