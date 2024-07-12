import React from 'react';

const educationData = [
  {
    year: '2021',
    institution: 'Central American University José Simeon Cañas',
    description: 'Pursuing a Bachelors degree in Computer Engineering, focusing on developing strong technical skills in software development, system architecture, and data analysis. Engaged in projects that involve cutting-edge technologies and innovative problem-solving.',
    iconColor: '#7C4DFF',
  }
];

const Education = () => {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xl font-semibold text-gray-600">MY EXPERIENCE</h2>
          <h3 className="text-4xl font-bold mb-4">Education</h3>
          <p className="text-gray-500 max-w-lg mx-auto md:mx-0">
            Some details about my education and background.
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-lg text-center md:text-left">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 md:mb-0" style={{ backgroundColor: item.iconColor }}>
                <span className="text-white font-bold text-lg">{item.year}</span>
              </div>
              <div className="md:ml-6">
                <h4 className="text-xl font-semibold mb-2">{item.institution}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
