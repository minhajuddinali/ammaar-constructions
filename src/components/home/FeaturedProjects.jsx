import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Bed, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../constants/data';
import PropertyDetailModal from '../PropertyDetailModal';

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const featuredProjects = PROJECTS.slice(0, 3);

    return (
        <>
            <section className="py-16 md:py-24 bg-light-gray">
                <div className="container-custom">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-12">
                        <div className="max-w-xl">
                            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Featured</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mt-3 mb-4">
                                Premium Properties
                            </h2>
                            <p className="text-gray-500">
                                Hand-picked properties offering the best value and exceptional living experience.
                            </p>
                        </div>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-medium hover:bg-accent transition-colors"
                        >
                            View All Projects
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {featuredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-56 md:h-64 overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-gray-50 transition-transform duration-700 group-hover:scale-105"
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
                                    {/* Overlay */}
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

                                    {/* Quick Info */}
                                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                                        {project.bedrooms && (
                                            <span className="flex items-center gap-1">
                                                <Bed size={14} />
                                                {project.bedrooms} BHK
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Maximize size={14} />
                                            {project.surface}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <p className="text-gray-600 text-sm">{project.surface}</p>
                                        <span className="text-xs uppercase tracking-wider text-gray-400">{project.type}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

export default FeaturedProjects;
