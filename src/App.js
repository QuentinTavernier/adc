import React, {useState, useEffect, useRef} from 'react';

import {Menu} from './components/Menu';
import {Home} from './components/contents/Home';
import {HeartRelay} from "./components/contents/HeartRelay";
import {Footer} from "./components/Footer";

function App() {
    const [value, setValue] = useState(0);

    const homeRef = useRef(null);
    const relayRef = useRef(null);
    const adventRef = useRef(null);
    const newsRef = useRef(null);
    const whoAreWeRef = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const sectionRefs = [homeRef, relayRef];
        sectionRefs[newValue].current.scrollIntoView({behavior: 'smooth', block: "center"});
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target.id) {
                            case 'section-0':
                                setValue(0);
                                break;
                            case 'section-1':
                                setValue(1);
                                break;
                            case 'section-2':
                                setValue(2);
                                break;
                            case 'section-3':
                                setValue(3);
                                break;
                            case 'section-4':
                                setValue(4);
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        const sections = [homeRef, relayRef];
        sections?.forEach((section) => observer.observe(section.current));

        return () => {
            sections?.forEach((section) => observer.unobserve(section.current));
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <header>
                <Menu value={value} handleChange={handleChange}/>
            </header>
            <div className="relative">
                <img
                    src={require('./assets/images/banner.webp')}
                    className="w-full h-auto mt-32 mb-4"
                    alt="banner"
                />
            </div>
            <div className="container flex-grow">
                <div ref={homeRef} id="section-0" className="content-section">
                    <Home/>
                </div>
                <div ref={relayRef} id="section-1" className="content-section">
                    <HeartRelay/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
