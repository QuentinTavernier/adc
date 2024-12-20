import React from "react";

import {Contact} from "./Contact";
import {Logo} from "./Logo";

export const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-black">
            <div className="container py-8 md:py-12">
                <div className="flex d-flex-col md:d-flex-row between-center w-full gap-8 md:gap-2">
                    <Logo/>
                    <Contact/>
                </div>
            </div>
            <div className="bg-opaqueGreen py-4 flex center-center">
                <button
                    onClick={() => window.open('https://quentintavernier.github.io/cv/')}
                >
                    <img
                        src={require(`../assets/images/qt.webp`)}
                        alt="qt"
                        className="h-6 w-auto"
                    />
                </button>
                <p className="p-text text-green">
                    - 2025 ©
                </p>
            </div>
        </footer>
    )
}
