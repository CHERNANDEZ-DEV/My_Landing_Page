import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'React JS', value: 95, color: '#7C4DFF' },
  { name: 'Spring Boot', value: 86, color: '#FF7043' },
  { name: 'Power BI', value: 82, color: '#FF5252' },
  { name: 'Node JS', value: 79, color: '#448AFF' },
];

const Skills = () => {
  return (
    <div className="bg-[#1A1A2E] text-white py-12 px-6 md:px-12 border-4 border-[#1A1A2E] rounded-t-3xl">
      <div className="max-w-8xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xl font-semibold text-gray-400">MY SKILLS</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Beautiful and unique digital experiences</h3>
          <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
            Discover how our innovative solutions can help elevate your brand and achieve your business goals. We specialize in a variety of services tailored to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={skill.value}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    textColor: '#000',
                    pathColor: skill.color,
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
              <h4 className="text-xl font-semibold text-black">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

