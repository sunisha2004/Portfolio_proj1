import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skill from './Components/Skill';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <Header />
      <main className="w-full mt-10 px-6">
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
