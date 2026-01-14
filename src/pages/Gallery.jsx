import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { X, ChevronLeft, ChevronRight, MapPin, Images } from 'lucide-react';
import { PROJECTS } from '../constants/data';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const categories = ['All', 'Residential', 'Farmland'];

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.type === filter);

    const openGallery = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                (prev + 1) % selectedProject.images.length
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                (prev - 1 + selectedProject.images.length) % selectedProject.images.length
            );
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-light-gray">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold tracking-wider uppercase mb-4">
                            Visual Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                            Project Gallery
                        </h1>
                        <p className="text-white/70 text-lg">
                            Browse stunning visuals from our {PROJECTS.length} premium projects across Telangana.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <div className="container-custom py-8 md:py-12">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {categories.map((cat) => {
                        const count = cat === 'All'
                            ? PROJECTS.length
                            : PROJECTS.filter(p => p.type === cat).length;
                        return (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={clsx(
                                    'px-5 md:px-6 py-2.5 md:py-3 font-medium transition-all text-sm md:text-base',
                                    filter === cat
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-200'
                                )}
                            >
                                {cat} ({count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container-custom pb-16 md:pb-24">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => openGallery(project)}
                                className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Main Image */}
                                <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden bg-gray-100">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    {/* Image Count Badge */}
                                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 flex items-center gap-2 text-sm">
                                        <Images size={16} />
                                        {project.images.length} Photos
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 text-primary text-xs font-semibold uppercase tracking-wider">
                                            {project.type}
                                        </span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-primary px-6 py-3 font-medium">
                                            View Gallery
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5 md:p-6">
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <MapPin size={14} className="mr-1 flex-shrink-0" />
                                        <span className="truncate">{project.location}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>

            {/* Image Gallery Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeGallery}
                            className="fixed inset-0 bg-black/95 z-[60]"
                        />

                        {/* Gallery Content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[70] flex flex-col safe-area-inset"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 text-white bg-black/50">
                                <div className="min-w-0 flex-1 pr-4">
                                    <h3 className="text-base sm:text-xl md:text-2xl font-serif font-bold truncate">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-white/60 text-xs sm:text-sm truncate">{selectedProject.location}</p>
                                </div>
                                <button
                                    onClick={closeGallery}
                                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors rounded-full"
                                >
                                    <X size={20} className="sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            {/* Main Image Container */}
                            <div className="flex-1 relative flex items-center justify-center p-2 sm:p-4 md:p-8 min-h-0">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-sm"
                                        style={{ maxHeight: 'calc(100vh - 200px)' }}
                                    />
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors rounded-full"
                                        >
                                            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors rounded-full"
                                        >
                                            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnails & Counter */}
                            <div className="p-2 sm:p-4 md:p-6 bg-black/50">
                                {/* Thumbnails - scrollable on mobile */}
                                <div className="flex justify-start sm:justify-center gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide">
                                    {selectedProject.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={clsx(
                                                'flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden transition-all rounded-sm',
                                                currentImageIndex === idx
                                                    ? 'ring-2 ring-accent opacity-100 scale-105'
                                                    : 'opacity-60 hover:opacity-90'
                                            )}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                                {/* Counter */}
                                <p className="text-center text-white/70 text-xs sm:text-sm mt-2 sm:mt-3 font-medium">
                                    {currentImageIndex + 1} of {selectedProject.images.length}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
