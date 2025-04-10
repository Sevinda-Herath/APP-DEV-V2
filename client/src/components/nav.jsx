import { Link } from 'react-router-dom';

import logo from '../assets/SLT-NEBULA-HOME.png'

export default function Navbar() {
    return (
        <header class="text-gray-600 body-font bg-indigo-900">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to="/" className="mr-5 text-cyan-50 hover:text-blue-500">Home</Link>
            <Link to="/AboutUs" className="mr-5 text-cyan-50 hover:text-blue-500">About Us</Link>
            <Link to="/Rules" className="mr-5 text-cyan-50 hover:text-blue-500">Rules</Link>
            <Link to="/Contact" className="mr-5 text-cyan-50 hover:text-blue-500">Contact</Link>
          </nav>
            <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img  class="w-80" src={logo} alt="Nebula Logo" />
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                      {/* Login Button */}
        <Link to="/login">
          <button className="inline-flex items-center bg-indigo-600 text-cyan-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-indigo-500 rounded text-base mt-4 md:mt-0">
            Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
              <div class="w-3 "></div>

        {/* Register Button */}
        <Link to="/register">
          <button className="inline-flex items-center bg-indigo-600 text-cyan-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-indigo-500 rounded text-base mt-4 md:mt-0">
            Register
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
          </div>
        </header>
    )}