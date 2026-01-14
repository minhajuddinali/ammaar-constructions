import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Animated Background Lines - Blue Theme */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                            duration: 2.5,
                            delay: i * 0.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                        style={{ top: `${20 + i * 15}%`, width: '50%' }}
                    />
                ))}
            </div>

            {/* Expanding Circle Animation - Blue */}
            <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                className="absolute w-40 h-40 rounded-full border border-primary/20"
            />
            <motion.div
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                className="absolute w-40 h-40 rounded-full border border-accent/20"
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Reveal Animation */}
                <div className="relative">
                    <motion.div
                        initial={{ height: '100%' }}
                        animate={{ height: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
                        className="absolute inset-0 bg-white z-10 origin-top"
                    />
                    <motion.img
                        src={logo}
                        alt="Ammaar Constructions"
                        className="h-32 md:h-44 w-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Tagline */}
                <div className="mt-8 overflow-hidden">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.65, 0, 0.35, 1] }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="h-[1px] bg-primary/30"
                        />
                        <span className="text-primary/60 text-xs tracking-[0.3em] uppercase font-medium">
                            Projects Develop & Promoted
                        </span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="h-[1px] bg-primary/30"
                        />
                    </motion.div>
                </div>

                {/* Animated Loading Dots - Blue */}
                <motion.div
                    className="mt-12 flex gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.5, 1],
                                backgroundColor: ['#1e3a5f', '#3182ce', '#1e3a5f']
                            }}
                            transition={{
                                duration: 1,
                                delay: i * 0.15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 rounded-full bg-primary"
                        />
                    ))}
                </motion.div>
            </div>

            {/* Bottom Progress Line - Blue Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                />
            </div>

            {/* Corner Decorations - Blue */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-8 left-8"
            >
                <div className="w-12 h-12 border-l-2 border-t-2 border-primary/20" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-8 right-8"
            >
                <div className="w-12 h-12 border-r-2 border-t-2 border-primary/20" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-8 left-8"
            >
                <div className="w-12 h-12 border-l-2 border-b-2 border-primary/20" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 right-8"
            >
                <div className="w-12 h-12 border-r-2 border-b-2 border-primary/20" />
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
