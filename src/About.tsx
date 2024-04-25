import AboutComponent from '@/components/about/About.component.tsx';
import FooterComponent from '@/components/footer/Footer.component.tsx';
import HeaderComponent from '@/components/header/Header.component.tsx';

import './About.css';

function About() {
    return (
        <div className="about">
            <HeaderComponent />
            <AboutComponent />
            <FooterComponent />
        </div>
    );
}

export default About;
