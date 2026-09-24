import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-400">
            <Code2 className="w-8 h-8" />
            <span>SEU CC</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
            <Link to="#events" className="hover:text-indigo-400 transition">Events</Link>
            <Link to="#about" className="hover:text-indigo-400 transition">About Us</Link>
            <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
              Register
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (Absolute Positioning - overlay on hero section) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 shadow-xl space-y-3 z-50">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-slate-200 hover:text-indigo-400 transition border-b border-slate-800"
          >
            Home
          </Link>
          <Link
             to="#events" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-slate-200 hover:text-indigo-400 transition border-b border-slate-800"
          >
            Events
          </Link>
          <Link
             to="#about" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-slate-200 hover:text-indigo-400 transition border-b border-slate-800"
          >
            About Us
          </Link>
          <Link 
            to="/register" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition mt-2"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}