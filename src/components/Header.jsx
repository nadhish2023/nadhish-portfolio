import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = ({ 
    scrollToAbout, 
    scrollToEducation,
    scrollToExperience, 
    scrollToSkills, 
    scrollToProjects, 
    scrollToContact 
}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = (scrollFunction) => {
        if (scrollFunction) {
            scrollFunction();
        }
        if (isMobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-4 lg:px-20 bg-black bg-opacity-30 backdrop-blur-md">

                <div className="flex-shrink-0">
                    <a href="#" aria-label="Go to Homepage">
                        <img
                            src="/nadhish_logo.png"
                            alt="Nadhish Logo"
                            className="w-20 md:w-32 lg:w-40 h-auto object-contain"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToAbout)}>HOME</a>
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToEducation)}>EDUCATION</a>
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToExperience)}>EXPERIENCE</a>
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToSkills)}>SKILLS</a>
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToProjects)}>PROJECTS</a>
                    <a className="cursor-pointer text-base tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToContact)}>CONTACT</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-3xl p-2 ml-auto'
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className='fixed inset-0 w-full h-full p-5 md:hidden z-40 bg-black bg-opacity-80 backdrop-blur-lg'
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <nav
                        className='flex flex-col gap-8 items-center justify-center h-full text-white'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToAbout)}>HOME</a>
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToEducation)}>EDUCATION</a>
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToExperience)}>EXPERIENCE</a>
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToSkills)}>SKILLS</a>
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToProjects)}>PROJECTS</a>
                        <a className="cursor-pointer text-xl tracking-wider transition-colors hover:text-orange-500" onClick={() => handleLinkClick(scrollToContact)}>CONTACT</a>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;