import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img
                    src={project.image || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3'}
                    alt={project.title}
                    className="w-full h-full object-contain bg-gray-50 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.type}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin size={16} className="mr-2 text-accent" />
                    {project.location}
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Building2 size={16} className="mr-2 text-accent" />
                    {project.surface || '2,400'} sq ft
                </div>

                <Button variant="outline" className="w-full text-sm py-2 group-hover:bg-primary group-hover:text-white transition-colors">
                    View Details
                </Button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
