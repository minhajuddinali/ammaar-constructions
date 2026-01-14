import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield, Building, Users, MapPin, CheckCircle, TrendingUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, FEATURES, STATISTICS, MILESTONES, TESTIMONIALS } from '../constants/data';

const About = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold tracking-wider uppercase mb-6"
                        >
                            Est. {COMPANY_INFO.established}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
                        >
                            Building Dreams, <br className="hidden md:block" />
                            Creating Legacies
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/80 text-lg md:text-xl leading-relaxed"
                        >
                            {COMPANY_INFO.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 md:py-14 bg-accent">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                        {[
                            { value: `${STATISTICS.yearsExperience}+`, label: 'Years Experience', icon: Calendar },
                            { value: `${STATISTICS.projectsCompleted}+`, label: 'Projects Completed', icon: Building },
                            { value: `${STATISTICS.happyFamilies}+`, label: 'Happy Families', icon: Users },
                            { value: `${STATISTICS.awards}`, label: 'Awards Won', icon: Award },
                            { value: `${STATISTICS.ongoingProjects}`, label: 'Ongoing Projects', icon: TrendingUp },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <stat.icon size={24} className="mx-auto mb-2 text-white/80" />
                                <span className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</span>
                                <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-24 bg-light-gray">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="/images/about-us-new.png"
                                    alt="Our Story"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-accent hidden md:block" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3 mb-6">
                                A Legacy of Excellence Since 2009
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                What started as a small construction firm in 2009 has grown into one of Telangana's most trusted real estate companies.
                                Our founder's vision was simple: build homes that families would cherish for generations.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Today, with over 15+ successful projects and 500+ happy families, we continue to uphold the same values of
                                quality, transparency, and customer satisfaction that we started with. Our portfolio spans luxury villas,
                                premium apartments, and agricultural land developments across Hyderabad and its surrounding districts.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {['RERA Registered', 'HMDA Approved', 'ISO Certified', 'Bank Approved'].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-3 border-l-4 border-accent">
                                        <CheckCircle size={18} className="text-accent flex-shrink-0" />
                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Our Mission & Vision</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary p-8 md:p-10 text-white"
                        >
                            <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                            <p className="text-white/80 leading-relaxed">
                                To deliver exceptional real estate solutions that exceed expectations. We aim to create properties
                                that families cherish, investors trust, and communities thrive in. Every project we undertake
                                reflects our commitment to quality, integrity, and customer satisfaction.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-light-gray p-8 md:p-10"
                        >
                            <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                                <Eye size={28} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted name in Telangana's real estate industry, known for innovative designs,
                                transparent dealings, and unwavering commitment to quality. We envision building communities
                                that stand the test of time and create lasting value for all stakeholders.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24 bg-light-gray">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Key Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20" />

                        {MILESTONES.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-start mb-8 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                    <span className="text-accent font-bold text-lg">{item.year}</span>
                                    <h3 className="text-xl font-serif font-bold text-primary mt-1">{item.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow z-10" />

                                {/* Spacer for other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Strengths</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-3">Why Choose Us</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((feature, idx) => {
                            const icons = [Award, Shield, CheckCircle, Building, Users, MapPin];
                            const Icon = icons[idx % icons.length];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 md:p-8 bg-light-gray hover:bg-primary group transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-4 transition-colors">
                                        <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary group-hover:text-white mb-2 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">What Our Clients Say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 md:p-8"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-accent">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                    "{testimonial.text}"
                                </p>
                                <div>
                                    <p className="font-bold text-primary">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-accent">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Ready to Build Your Dream?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's discuss your requirements and find the perfect property for you.
                        Contact us today for a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="inline-block bg-white text-primary px-8 py-4 font-medium hover:bg-primary hover:text-white transition-colors"
                        >
                            Explore Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block bg-primary text-white px-8 py-4 font-medium hover:bg-white hover:text-primary transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
