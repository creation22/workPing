import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-semibold text-black">
              WorkPing
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#start" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#tut" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 relative group"
            >
              Guide
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#form" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 relative group"
            >
              Setting
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#footer" 
              className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-black hover:text-gray-600 transition-colors duration-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#start" 
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Page
              </a>
              <a 
                href="#tut" 
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tutorial
              </a>
              <a 
                href="#form" 
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Form
              </a>
              <a 
                href="#footer" 
                className="text-lg font-medium text-black hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar   