import OurStory from '../About/OurStory';
import Landing from '../Home/Landing';
import WhyUs from '../About/WhyUs';
import OurServices from '../Services/OurServices';

export default function About() {

    return (
        <div>

            <Landing 
            title="Services That Empower NGOs to Grow Smarter"
            description='Discover the tools and solutions that help nonprofits strengthen their digital presence, unlock meaningful CSR partnerships, streamline documentation, and build long-term donor trust — all within one unified platform designed to support sustainable growth. DaanPitara empowers organizations to operate efficiently and attract the right stakeholders with confidence.'

            />
            <OurStory />
            <OurServices />
            <WhyUs />

        </div>

    );
}
