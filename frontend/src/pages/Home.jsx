import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
     
      <main className="p-8 flex-grow w-full">
        <h1 className="text-4xl font-bold">Welcome to the User Management System</h1>
        <p className="mt-4">Manage your users efficiently and effectively.</p>
      </main>
    </div>
  );
};

export default Home;
