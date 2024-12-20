import React from "react";

import {useTranslation} from "react-i18next";

import {Contact} from "./Contact";
import {Logo} from "./Logo";
import {ButtonComponent} from "./ButtonComponent";

export const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="w-full bg-white dark:bg-black">
            <div className="container py-8 md:py-12">
                <div className="d-flex-col md:d-flex-row between-center w-full gap-8 md:gap-2">
                    <div className="center-center d-flex-col gap-2">
                        <Logo/>
                        <ButtonComponent
                            animateIcon
                            icon="volunteer_activism"
                            text={t('participate')}
                            onClick={() => window.open('https://www.helloasso.com/associations/auvergnats-du-coeur/formulaires/1')}
                        />
                    </div>
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
