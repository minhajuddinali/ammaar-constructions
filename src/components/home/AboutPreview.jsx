import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle, Building, Users, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, STATISTICS } from '../../constants/data';

const AboutPreview = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/images/about-us-new.png"
                                alt="About Ammaar Constructions"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Stats Card Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-8 -right-4 md:-right-8 bg-primary text-white p-6 md:p-8 shadow-2xl rounded-lg"
                        >
                            <div className="text-center">
                                <span className="text-4xl md:text-5xl font-serif font-bold text-accent">
                                    {STATISTICS.yearsExperience}+
                                </span>
                                <p className="text-white/70 mt-2 text-sm">Years of Excellence</p>
                            </div>
                        </motion.div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent hidden lg:block rounded-tl-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mt-3 mb-6 leading-tight">
                            Building Dreams Since {COMPANY_INFO.established}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {COMPANY_INFO.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200">
                            <div className="text-center">
                                <Building size={24} className="mx-auto text-accent mb-2" />
                                <span className="text-2xl font-bold text-primary">{STATISTICS.projectsCompleted}+</span>
                                <p className="text-gray-500 text-xs mt-1">Projects</p>
                            </div>
                            <div className="text-center">
                                <Users size={24} className="mx-auto text-accent mb-2" />
                                <span className="text-2xl font-bold text-primary">{STATISTICS.happyFamilies}+</span>
                                <p className="text-gray-500 text-xs mt-1">Happy Families</p>
                            </div>
                            <div className="text-center">
                                <Award size={24} className="mx-auto text-accent mb-2" />
                                <span className="text-2xl font-bold text-primary">{STATISTICS.awards}</span>
                                <p className="text-gray-500 text-xs mt-1">Awards</p>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {['RERA & HMDA Approved', 'Transparent Pricing', 'Quality Construction', 'On-Time Delivery'].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle size={18} className="text-accent flex-shrink-0" />
                                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-medium hover:bg-accent transition-colors"
                        >
                            Learn More About Us
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
