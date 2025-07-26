import React from "react";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md text-white py-8 px-4 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Footer Text */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">Thanks for your time!</h3>
          <p className="text-gray-400 max-w-md mt-1">
            I'm always open to connecting. Feel free to reach out or follow my
            work.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/nadhish2023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-4xl text-gray-300 hover:text-orange-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nadhish-sn-b0b280290"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-4xl text-gray-300 hover:text-orange-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.instagram.com/_nadhish_phoenix_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-4xl text-gray-300 hover:text-orange-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Nadhish. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
