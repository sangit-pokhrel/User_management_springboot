import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  ToastContainer  from 'react-hot-toast';
import TeacherList from "./pages/TeacherList.jsx";

// import AddStudent from "./pages/AddStudent.jsx";

const App = () => {
  return (
<>

  
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/*<Route path="/add-student" element={<AddStudent />} />*/}
                <Route path="/add-teacher" element={<TeacherList />} />
            </Routes>
        </main>
        <Footer />
    </div>

</>

  );
};

export default App;
