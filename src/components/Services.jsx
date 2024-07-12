import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLightbulb, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className="bg-white text-black py-12 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xl font-semibold text-gray-600">MY EXPERTISE</h2>
          <h3 className="text-4xl font-bold mb-4">Innovative Solutions</h3>
          <p className="text-gray-500 max-w-lg mx-auto md:mx-0">
            Discover how our innovative solutions can help elevate your brand and achieve your business goals. We specialize in a variety of services tailored to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full mb-4 mx-auto md:mx-0">
              <FontAwesomeIcon icon={faPalette} size="2x" className="text-yellow-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Web Design</h4>
            <p className="text-gray-600 text-center md:text-left">
              Creating visually appealing and user-friendly web designs to enhance user experience and engagement.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full mb-4 mx-auto md:mx-0">
              <FontAwesomeIcon icon={faLightbulb} size="2x" className="text-yellow-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center md:text-left">IOT</h4>
            <p className="text-gray-600 text-center md:text-left">
                Enabling connectivity between devices to automate processes, improve operational efficiency, and provide real-time data. 
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-yellow-200 rounded-full mb-4 mx-auto md:mx-0">
              <FontAwesomeIcon icon={faBullhorn} size="2x" className="text-yellow-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center md:text-left">Data analyst</h4>
            <p className="text-gray-600 text-center md:text-left">
                Transforming data into actionable insights to guide strategic decisions, optimize processes, and drive business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

