import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path as needed

const Navbar = () => {
  const { authToken, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
      <header className="bg-gradient-to-r from-primary to-secondary py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary-foreground"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
              <path d="M12 22V12"/>
              <path d="M6 12H18"/>
            </svg>


            <span className="text-lg font-semibold text-primary-foreground">
            School Management
          </span>
          </NavLink>
          <nav className="hidden md:flex items-center space-x-6">
            {authToken ? (
                <>
                  <NavLink
                      to="/dashboard"
                      className={({isActive}) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    Add Student
                  </NavLink>
                  <NavLink
                      to="/add-teacher"
                      className={({ isActive }) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    Add Teacher
                  </NavLink>
                  <button
                      onClick={handleLogout}
                      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  >
                    Logout
                  </button>
                </>
            ) : (
                <>
                  <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    Home
                  </NavLink>
                  <NavLink
                      to="/about"
                      className={({ isActive }) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    About
                  </NavLink>
                  <NavLink
                      to="/services"
                      className={({ isActive }) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    Services
                  </NavLink>
                  <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                          isActive
                              ? "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                              : "text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                      }
                  >
                    Contact
                  </NavLink>

                </>
            )}
          </nav>
          <Link to="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-black text-white text-secondary-foreground hover:bg-secondary/90 transition-colors">
            Login
          </Link>
        </div>
      </header>
  );
};

export default Navbar;
