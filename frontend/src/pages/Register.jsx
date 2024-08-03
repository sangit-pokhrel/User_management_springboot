import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [parentsNumber, setParentsNumber] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        fullname,
        email,
        password,
        phonenumber,
        parentsNumber,
        permanentAddress
      });
      console.log('Registration successful:', response.data);
      toast.success('Registration successful! Redirecting to login page...');
      // Clear form
      setFullname('');
      setEmail('');
      setPassword('');
      setPhonenumber('');
      setParentsNumber('');
      setPermanentAddress('');
      
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8"
         style={{
           backgroundImage: 'url("https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
    >
      <Toaster position="top-center" />
      <div className="max-w-2xl w-full bg-white p-8 rounded-md shadow-md">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Acme Inc</h1>
          <p className="text-muted-foreground">
            Create your account to access our powerful tools and features.
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid gap-2">
            <label htmlFor="fullname" className="text-sm font-medium leading-none">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phonenumber" className="text-sm font-medium leading-none">
              Phone Number
            </label>
            <input
              id="phonenumber"
              type="text"
              placeholder="Enter your phone number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="parentsNumber" className="text-sm font-medium leading-none">
              Parent's Phone Number
            </label>
            <input
              id="parentsNumber"
              type="text"
              placeholder="Enter your parent's phone number"
              value={parentsNumber}
              onChange={(e) => setParentsNumber(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="permanentAddress" className="text-sm font-medium leading-none">
              Permanent Address
            </label>
            <input
              id="permanentAddress"
              type="text"
              placeholder="Enter your permanent address"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Register
          </button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
