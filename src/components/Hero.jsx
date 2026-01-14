import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants/data';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

    return (
        <div className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-primary">
            {/* Background Images */}
            {/* Main Content */}
            <div className="relative z-20 container-custom h-full flex items-center justify-center pt-20 pb-24 pointer-events-none">
                {/* Inquiry Button - Centered at the bottom or prominent */}
                <div className="absolute bottom-24 md:bottom-28 left-0 right-0 z-50 flex justify-center pointer-events-auto">
                    <Link
                        to="/contact"
                        className="group flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 font-bold tracking-wide hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full border-2 border-white/20 backdrop-blur-sm"
                    >
                        INQUIRY NOW
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Background Images - Made Clickable */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-10 pt-[72px] md:pt-[88px]"
                >
                    <Link to="/contact" className="block w-full h-full cursor-pointer">
                        <div className="w-full h-full flex items-center justify-center bg-gray-900">
                            <img
                                src={HERO_SLIDES[current].image}
                                alt={HERO_SLIDES[current].title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6">
                <div className="container-custom flex items-center justify-between">
                    {/* Progress Indicators */}
                    <div className="flex items-center gap-2">
                        {HERO_SLIDES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? 'w-8 md:w-12 bg-accent' : 'w-3 md:w-4 bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;


