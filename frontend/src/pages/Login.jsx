import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      navigate('/dashboard');
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000); // 1000 milliseconds = 1 second

      // Clear the timeout if the component unmounts before the timeout completes
      return () => clearTimeout(timer);

    } catch (error) {
      toast.error('Login error!');
      console.error('Login error:', error);
    }
  };

  return (
      <div className="flex min-h-screen flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8"
           style={{
             backgroundImage: 'url("https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
           }}
      >
        <div className="mx-4 w-full max-w-md rounded-lg bg-background p-8 shadow-lg md:mx-0 bg-white">
          <div className="space-y-6 ">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">Enter your email and password to sign in.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label
                    className="text-sm font-medium leading-none"
                    htmlFor="email"
                >
                  Email
                </label>
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                      className="text-sm font-medium leading-none"
                      htmlFor="password"
                  >
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary-foreground underline underline-offset-4 hover:text-primary">
                    Forgot password?
                  </a>
                </div>
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>
              <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Sign in
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
