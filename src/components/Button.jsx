import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    to,
    href,
    ...props
}) => {
    const baseStyles = 'px-8 py-3 font-medium transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-primary text-white hover:bg-accent',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        accent: 'bg-accent text-white hover:bg-primary',
        ghost: 'text-primary hover:text-accent',
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    const MotionComponent = motion.create ? motion.create('button') : motion.button;

    if (to) {
        return (
            <Link to={to} className={buttonClass} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={buttonClass} {...props}>
                {children}
            </a>
        );
    }

    return (
        <MotionComponent
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={buttonClass}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};

export default Button;
