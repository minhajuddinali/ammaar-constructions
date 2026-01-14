import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building, Users, CheckCircle, Loader2 } from 'lucide-react';
import { COMPANY_INFO, STATISTICS } from '../constants/data';

// Google Form Configuration
const GOOGLE_FORM_CONFIG = {
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScOWE5vCKN9P3khOPFYP68zNZ-9X0wpJWaHTViW1yctfEoE3A/formResponse',
    entryIds: {
        name: 'entry.23900039',
        phone: 'entry.1000509920',
        email: 'entry.29073643',
        interest: 'entry.177355161',
        message: 'entry.1533124499',
    }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'Residential Property',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Build form data for Google Forms
            const googleFormData = new URLSearchParams();
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.name, formData.name);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.phone, formData.phone);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.interest, formData.interest);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.message, formData.message);

            // Submit to Google Form (no-cors mode - we won't get a response)
            await fetch(GOOGLE_FORM_CONFIG.formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleFormData.toString(),
            });

            // Show success (we assume success since no-cors doesn't return response)
            setIsSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                interest: 'Residential Property',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            // Fallback to WhatsApp if submission fails
            const text = `Hi, I'm ${formData.name}.\n\nInterested in: ${formData.interest}\n\nMessage: ${formData.message}\n\nContact: ${formData.phone}`;
            window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success Message Component
    if (isSubmitted) {
        return (
            <div className="pt-20 min-h-screen bg-light-gray flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-10 md:p-16 text-center shadow-xl max-w-lg mx-4"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                        Thank You!
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Your inquiry has been received. Our team will contact you within 24 hours.
                    </p>
                    <div className="space-y-3">
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="w-full bg-primary text-white py-3 font-medium hover:bg-accent transition-colors"
                        >
                            Send Another Message
                        </button>
                        <a
                            href="/"
                            className="block w-full border border-gray-300 text-gray-700 py-3 font-medium hover:border-primary hover:text-primary transition-colors"
                        >
                            Back to Home
                        </a>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold tracking-wider uppercase mb-4">
                                Contact
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                                Let's Build Your Dream
                            </h1>
                            <p className="text-white/70 text-lg mb-8">
                                Ready to find your perfect property? Get in touch with our team for personalized assistance.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-accent flex items-center justify-center">
                                        <Building size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">{STATISTICS.projectsCompleted}+</p>
                                        <p className="text-white/60 text-sm">Projects</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-accent flex items-center justify-center">
                                        <Users size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">{STATISTICS.happyFamilies}+</p>
                                        <p className="text-white/60 text-sm">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Cards - Floating on Hero */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="bg-white p-8 shadow-2xl">
                                <h3 className="text-xl font-bold text-primary mb-6">Quick Contact</h3>
                                <div className="space-y-5">
                                    <a
                                        href={`tel:${COMPANY_INFO.contact.phone}`}
                                        className="flex items-center gap-4 text-gray-600 hover:text-accent transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                                            <Phone size={20} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Call Us</p>
                                            <p className="font-medium text-primary">{COMPANY_INFO.contact.phone}</p>
                                        </div>
                                    </a>
                                    <a
                                        href={`mailto:${COMPANY_INFO.contact.email}`}
                                        className="flex items-center gap-4 text-gray-600 hover:text-accent transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                                            <Mail size={20} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Email Us</p>
                                            <p className="font-medium text-primary">{COMPANY_INFO.contact.email}</p>
                                        </div>
                                    </a>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={20} className="text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Visit Us</p>
                                            <p className="font-medium text-primary text-sm">{COMPANY_INFO.contact.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mobile Contact Cards */}
            <section className="container-custom -mt-8 relative z-10 lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { icon: Phone, title: 'Call Us', content: COMPANY_INFO.contact.phone, href: `tel:${COMPANY_INFO.contact.phone}` },
                        { icon: Mail, title: 'Email', content: COMPANY_INFO.contact.email, href: `mailto:${COMPANY_INFO.contact.email}` },
                        { icon: MapPin, title: 'Visit', content: 'Banjara Hills, Hyderabad', href: '#' },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="bg-white p-5 text-center shadow-xl group hover:bg-primary transition-colors duration-300"
                        >
                            <div className="w-10 h-10 mx-auto mb-3 bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                                <item.icon size={18} className="text-accent group-hover:text-white transition-colors" />
                            </div>
                            <p className="font-medium text-primary group-hover:text-white text-sm transition-colors">{item.content}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 bg-light-gray">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 bg-white p-6 md:p-10 shadow-lg"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Send a Message</h2>
                            <p className="text-gray-500 mb-6 md:mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">I'm Interested In</label>
                                        <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors bg-white"
                                        >
                                            <option value="Residential Property">Residential Property</option>
                                            <option value="Farm Lands">Farm Lands / Plots</option>
                                            <option value="Investment">Investment Opportunity</option>
                                            <option value="Other">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your requirements, budget, preferred location..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto bg-primary text-white py-3 px-8 font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Submit Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6"
                        >
                            {/* Office Hours */}
                            <div className="bg-white p-6 md:p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                        <Clock size={18} className="text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary">Office Hours</h3>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Monday - Friday</span>
                                        <span className="font-medium text-primary">9:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-medium text-primary">10:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Sunday</span>
                                        <span className="font-medium text-accent">By Appointment</span>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Option */}
                            <div className="bg-primary p-6 md:p-8 text-white">
                                <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                                <p className="text-white/70 text-sm mb-4">
                                    Call us directly or chat on WhatsApp for instant responses.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href={`tel:${COMPANY_INFO.contact.phone}`}
                                        className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 font-medium hover:bg-accent/90 transition-colors w-full justify-center"
                                    >
                                        <Phone size={18} />
                                        Call Now
                                    </a>
                                    <a
                                        href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=Hi, I'm interested in your properties.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 font-medium hover:bg-green-700 transition-colors w-full justify-center"
                                    >
                                        <MessageCircle size={18} />
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
