import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4">Get in touch with us for any queries.</p>
      </main>
    </div>
  );
};

export default Contact;
