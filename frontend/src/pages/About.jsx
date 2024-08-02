import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4">Learn more about our mission and values.</p>
      </main>
    </div>
  );
};

export default About;
