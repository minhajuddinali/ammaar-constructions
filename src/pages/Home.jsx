import Hero from '../components/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import GalleryPreview from '../components/home/GalleryPreview';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <AboutPreview />
            <FeaturedProjects />
            <GalleryPreview />
            <ContactSection />
        </div>
    );
};

export default Home;
