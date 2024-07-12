import React from 'react';
import Principal from './components/Principal';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Foot from './components/Foot';
import './index.css'; // Asegúrate de que Tailwind CSS esté importado

function App() {
  return (
    <div className="App">
      <section id="home">
        <Principal />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <Foot />
    </div>
  );
}

export default App;

