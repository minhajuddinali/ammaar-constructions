import { NavLink, Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, STATISTICS } from '../constants/data';
import logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-4">
                            <img src={logo} alt={COMPANY_INFO.name} className="h-14 brightness-0 invert" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Building dreams since {COMPANY_INFO.established}. Trusted by {STATISTICS.happyFamilies}+ families across Telangana.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={COMPANY_INFO.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href={COMPANY_INFO.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href={COMPANY_INFO.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Projects', path: '/projects' },
                                { name: 'Gallery', path: '/gallery' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="text-white/60 hover:text-accent transition-colors text-sm"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Properties */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Properties</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/projects?filter=Residential" className="text-white/60 hover:text-accent transition-colors text-sm">
                                    Residential Apartments
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects?filter=Residential" className="text-white/60 hover:text-accent transition-colors text-sm">
                                    Luxury Villas
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects?filter=Farmland" className="text-white/60 hover:text-accent transition-colors text-sm">
                                    Farm Lands
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`tel:${COMPANY_INFO.contact.phone}`}
                                    className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                                >
                                    <Phone size={16} className="flex-shrink-0" />
                                    {COMPANY_INFO.contact.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${COMPANY_INFO.contact.email}`}
                                    className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                                >
                                    <Mail size={16} className="flex-shrink-0" />
                                    {COMPANY_INFO.contact.email}
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/60 text-sm">
                                    <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                    {COMPANY_INFO.contact.address}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm text-center md:text-left">
                        © {currentYear} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
                    >
                        Back to Top
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
