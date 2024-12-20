import React, {useState, useEffect, useRef} from 'react';

import {Menu} from './components/Menu';
import {Home} from './components/contents/Home';
import {HeartRelay} from "./components/contents/HeartRelay";
import {Footer} from "./components/Footer";
import {AdventCalendar} from "./components/contents/AdventCalendar";
import {News} from "./components/contents/News";
import {WhoAreWe} from "./components/contents/WhoAreWe";
import {Banner} from "./components/Banner";

function App() {
    const [value, setValue] = useState(0);

    const homeRef = useRef(null);
    const relayRef = useRef(null);
    const adventRef = useRef(null);
    const newsRef = useRef(null);
    const whoAreWeRef = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const sectionRefs = [homeRef, relayRef, adventRef, newsRef, whoAreWeRef];
        sectionRefs[newValue].current.scrollIntoView({behavior: 'smooth', block: "start"});
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

        const sections = [homeRef, relayRef, adventRef, newsRef, whoAreWeRef];
        sections?.forEach((section) => observer.observe(section.current));

        return () => {
            sections?.forEach((section) => observer.unobserve(section.current));
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            <header>
                <Menu value={value} handleChange={handleChange}/>
            </header>
            <Banner/>
            <div className="container flex-grow">
                <div ref={homeRef} id="section-0" className="content-section">
                    <Home/>
                </div>
                <div ref={relayRef} id="section-1" className="content-section relative">
                    <HeartRelay/>
                </div>
                <div ref={adventRef} id="section-2" className="content-section relative">
                    <AdventCalendar/>
                </div>
                <div ref={newsRef} id="section-3" className="content-section relative">
                    <div className="absolute inset-0 w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-green"/>
                    <News/>
                </div>
                <div ref={whoAreWeRef} id="section-4" className="content-section mb-24">
                    <WhoAreWe/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
