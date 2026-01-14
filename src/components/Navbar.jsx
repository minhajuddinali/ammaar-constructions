import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 py-3 bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Ammaar Constructions"
                        className="h-12 md:h-14 w-auto"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="relative text-sm font-medium tracking-wide transition-colors py-2 text-gray-700 hover:text-primary"
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute left-0 bottom-0 w-full h-[2px] bg-accent"
                                />
                            )}
                        </NavLink>
                    ))}

                    {/* CTA Buttons */}
                    <NavLink
                        to="/login"
                        className="px-5 py-2.5 text-sm font-medium border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="px-6 py-2.5 text-sm font-medium bg-primary text-white hover:bg-accent transition-colors"
                    >
                        Get Quote
                    </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden focus:outline-none text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white absolute top-full left-0 w-full overflow-hidden shadow-lg border-t"
                    >
                        <div className="container-custom flex flex-col py-6 space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-lg font-medium py-2 transition-colors ${isActive ? 'text-accent' : 'text-gray-700 hover:text-primary'
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/login"
                                className="border border-gray-300 text-gray-700 px-5 py-3 text-center font-medium hover:border-primary hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="bg-primary text-white px-5 py-3 text-center font-medium hover:bg-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Quote
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
