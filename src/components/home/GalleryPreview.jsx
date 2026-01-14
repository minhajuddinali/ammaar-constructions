import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants/data';
import PropertyDetailModal from '../PropertyDetailModal';

const GalleryPreview = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (direction) => {
        const container = document.getElementById('projects-scroll');
        const scrollAmount = 400;
        if (container) {
            const newPosition = direction === 'left'
                ? scrollPosition - scrollAmount
                : scrollPosition + scrollAmount;
            container.scrollTo({ left: newPosition, behavior: 'smooth' });
            setScrollPosition(newPosition);
        }
    };

    return (
        <>
            <section className="py-16 md:py-24 bg-light-gray overflow-hidden">
                {/* Header */}
                <div className="container-custom mb-10 md:mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="max-w-xl">
                            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Selected Works</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mt-3 mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-gray-500">
                                Explore our portfolio of premium residential properties and lucrative farm lands.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <Link
                                to="/projects"
                                className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-medium hover:bg-accent transition-colors"
                            >
                                View All
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    id="projects-scroll"
                    className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="flex-shrink-0 w-[320px] md:w-[380px] cursor-pointer group bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-56 md:h-64 overflow-hidden">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-contain bg-white transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Status Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${project.status === 'Ready to Move' ? 'bg-green-600 text-white' :
                                        project.status === 'Selling Fast' ? 'bg-red-600 text-white' :
                                            'bg-accent text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                {/* Type Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 text-primary text-xs font-semibold uppercase tracking-wider">
                                        {project.type}
                                    </span>
                                </div>
                                {/* View Overlay */}
                                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white text-primary px-5 py-2.5 font-medium text-sm">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <MapPin size={14} className="mr-1 flex-shrink-0" />
                                    <span className="truncate">{project.location}</span>
                                </div>
                                <h3 className="text-lg md:text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600 text-sm">{project.surface}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="container-custom mt-8 sm:hidden">
                    <Link
                        to="/projects"
                        className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 font-medium hover:bg-accent transition-colors w-full"
                    >
                        View All Projects
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <PropertyDetailModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};

export default GalleryPreview;
