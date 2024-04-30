import AboutComponent from '@/components/about/About.component.tsx';
import FooterComponent from '@/components/footer/Footer.component.tsx';
import HeaderComponent from '@/components/header/Header.component.tsx';

import './App.css';

function App() {
    return (
        <div className="body">
            <HeaderComponent />
            <AboutComponent />
            <FooterComponent />
        </div>
    );
}

export default App;
