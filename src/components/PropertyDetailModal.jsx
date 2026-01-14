import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Maximize, Bed, Bath, Check, Phone, MessageCircle, Calendar, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants/data';

const PropertyDetailModal = ({ project, isOpen, onClose }) => {
    const [currentImage, setCurrentImage] = useState(0);

    if (!project) return null;

    const nextImage = () => {
        if (project.images.length > 1) {
            setCurrentImage((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (project.images.length > 1) {
            setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container - Centered */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-6xl h-[85vh] md:h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 shadow-md rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Section - 50% width */}
                            <div className="lg:w-1/2 h-64 sm:h-80 lg:h-full relative bg-gray-50 flex items-center justify-center p-3 border-b lg:border-b-0 lg:border-r border-gray-100">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImage}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        src={project.images[currentImage]}
                                        alt={project.title}
                                        className="w-full h-full object-contain"
                                    />
                                </AnimatePresence>

                                {/* Status Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider shadow-sm rounded-sm ${project.status === 'Ready to Move' ? 'bg-green-600 text-white' :
                                        project.status === 'Selling Fast' ? 'bg-red-600 text-white' :
                                            'bg-accent text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Image Navigation */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 shadow-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 shadow-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                            <ChevronRight size={20} />
                                        </button>

                                        {/* Image Dots */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                            {project.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`w-2 h-2 rounded-full transition-all shadow-sm ${currentImage === idx ? 'bg-white w-4' : 'bg-white/60 hover:bg-white'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Price Tag */}
                                <div className="absolute bottom-6 left-6 bg-accent text-white px-6 py-2.5 font-bold text-lg shadow-lg rounded-sm">
                                    {project.price}
                                </div>
                            </div>

                            {/* Content Section - 50% width */}
                            <div className="lg:w-1/2 flex flex-col h-full bg-white">
                                <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                                    {/* Type */}
                                    <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
                                        {project.type}
                                    </span>

                                    {/* Title */}
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
                                        {project.title}
                                    </h2>

                                    {/* Location */}
                                    <div className="flex items-center text-gray-500 mb-8 text-sm md:text-base font-medium">
                                        <MapPin size={18} className="mr-2 text-accent flex-shrink-0" />
                                        {project.location}
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                            <Maximize size={20} className="mx-auto mb-2 text-accent" />
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Area</p>
                                            <p className="font-bold text-primary">{project.surface}</p>
                                        </div>
                                        {project.bedrooms && (
                                            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <Bed size={20} className="mx-auto mb-2 text-accent" />
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Bedrooms</p>
                                                <p className="font-bold text-primary">{project.bedrooms} BHK</p>
                                            </div>
                                        )}
                                        {project.bathrooms && (
                                            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <Bath size={20} className="mx-auto mb-2 text-accent" />
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Bathrooms</p>
                                                <p className="font-bold text-primary">{project.bathrooms}</p>
                                            </div>
                                        )}
                                        {((!project.bedrooms && !project.bathrooms) || project.yearBuilt) && (
                                            <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <Calendar size={20} className="mx-auto mb-2 text-accent" />
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Year</p>
                                                <p className="font-bold text-primary">{project.yearBuilt || '2024'}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-8">
                                        <h3 className="font-bold text-primary mb-3 text-lg">Description</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    {project.features && (
                                        <div className="mb-8">
                                            <h3 className="font-bold text-primary mb-4 text-lg">Key Features</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                                                {project.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start text-gray-600 text-sm">
                                                        <Check size={16} className="mr-2.5 text-accent flex-shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* CTA Buttons (Sticky Bottom) */}
                                <div className="p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/contact"
                                        className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary py-3.5 px-6 font-bold hover:bg-primary/5 transition-colors rounded-lg"
                                        onClick={onClose}
                                    >
                                        <Mail size={18} />
                                        Contact Us
                                    </Link>
                                    <a
                                        href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hi, I'm interested in ${project.title} (${project.price})`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 px-6 font-bold hover:bg-green-700 transition-colors rounded-lg shadow-lg hover:shadow-green-600/20"
                                    >
                                        <MessageCircle size={18} />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PropertyDetailModal;
