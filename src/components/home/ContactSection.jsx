import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants/data';

// Google Form Configuration (same as Contact page)
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

const ContactSection = () => {
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

            // Submit to Google Form
            await fetch(GOOGLE_FORM_CONFIG.formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleFormData.toString(),
            });

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
            // Fallback to WhatsApp
            const text = `Hi, I'm ${formData.name}.\n\nInterested in: ${formData.interest}\n\nMessage: ${formData.message}\n\nContact: ${formData.phone}`;
            window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mt-3 mb-4">
                        Ready to Start?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Connect with our team for personalized property recommendations and expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Contact Cards */}
                        <div className="bg-primary p-6 md:p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-5">
                                <a
                                    href={`tel:${COMPANY_INFO.contact.phone}`}
                                    className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors"
                                >
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">Call Us</p>
                                        <p className="font-medium">{COMPANY_INFO.contact.phone}</p>
                                    </div>
                                </a>
                                <a
                                    href={`mailto:${COMPANY_INFO.contact.email}`}
                                    className="flex items-center gap-4 text-white/80 hover:text-accent transition-colors"
                                >
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">Email</p>
                                        <p className="font-medium text-sm">{COMPANY_INFO.contact.email}</p>
                                    </div>
                                </a>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">Office</p>
                                        <p className="font-medium text-sm">{COMPANY_INFO.contact.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-white/60 text-sm mb-3">Office Hours</p>
                                <p className="text-white text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 font-medium hover:bg-primary transition-colors w-full"
                        >
                            Visit Contact Page
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-light-gray p-6 md:p-8"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} className="text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                                <p className="text-gray-600 mb-6">We've received your inquiry and will contact you soon.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="bg-primary text-white px-6 py-2 font-medium hover:bg-accent transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold text-primary mb-2">Quick Inquiry</h3>
                                <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                                placeholder="Your Name *"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                                placeholder="Phone Number *"
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                        placeholder="Email (Optional)"
                                    />

                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:outline-none transition-colors"
                                    >
                                        <option value="Residential Property">Interested in Residential Property</option>
                                        <option value="Farm Lands">Interested in Farm Lands</option>
                                        <option value="Investment">Looking for Investment</option>
                                        <option value="Other">Other Inquiry</option>
                                    </select>

                                    <textarea
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-accent focus:outline-none transition-colors resize-none"
                                        placeholder="Your requirements (optional)"
                                    />

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white py-3 px-6 font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors disabled:opacity-70"
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
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
