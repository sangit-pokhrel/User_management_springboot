import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);

  const loginUser = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/login', data);
      const { token } = response.data;
      setAuthToken(token);
      localStorage.setItem('token', token);
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  };

  const logoutUser = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authToken, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
