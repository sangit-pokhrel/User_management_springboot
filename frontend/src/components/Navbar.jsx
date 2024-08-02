import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as needed

const Navbar = () => {
  const { authToken, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
    
    // Redirect to login page after logout
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/">User Management</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/services" className="text-white">Services</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          {authToken ? (
            <button
              onClick={handleLogout}
              className="text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
