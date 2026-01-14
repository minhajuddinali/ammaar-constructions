import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import PropertyDetailModal from '../components/PropertyDetailModal';

const Projects = () => {
    const [searchParams] = useSearchParams();
    const initialFilter = searchParams.get('filter') || 'All';
    const [filter, setFilter] = useState(initialFilter);
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['All', 'Residential', 'Farmland'];

    useEffect(() => {
        const urlFilter = searchParams.get('filter');
        if (urlFilter && categories.includes(urlFilter)) {
            setFilter(urlFilter);
        }
    }, [searchParams]);

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.type === filter);

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
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                            Our Projects
                        </h1>
                        <p className="text-white/70 text-lg">
                            Explore {PROJECTS.length} premium properties across Telangana - from luxury villas to fertile farm lands.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <div className="container-custom py-8 md:py-12">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {categories.map((cat) => (
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
                            {cat} {cat !== 'All' && `(${PROJECTS.filter(p => p.type === cat).length})`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container-custom pb-16 md:pb-24">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden bg-gray-100">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-white transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
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
                                    {/* View Button on Hover */}
                                    <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-primary px-5 py-2.5 font-medium flex items-center gap-2 text-sm">
                                            View Details <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 md:p-6">
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <MapPin size={14} className="mr-1 flex-shrink-0" />
                                        <span className="truncate">{project.location}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-600 text-sm">{project.surface}</p>
                                    </div>
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

            <PropertyDetailModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;
