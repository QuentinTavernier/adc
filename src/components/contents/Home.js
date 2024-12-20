import React, {useState} from "react";

import {useTranslation} from "react-i18next";

import {Fund} from "../Fund";
import {Title} from "../Title";
import {ThankYou} from "../ThankYou";
import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";
import {ConfettiComponent} from "../ConfettiComponent";

export const Home = () => {
    const {t} = useTranslation();
    const [progressIsComplete, setProgressIsComplete] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleSetProgressIsComplete = () => {
        setProgressIsComplete(true);
        setTimeout(() => {
            setShowConfetti(true);
        }, 1000)
    }

    const handleOffConfetti = () => {
        setShowConfetti(false);
    }

    return (
        <SpringLayoutTransitionDiv className="h-fit d-flex-col gap">
            <Title text={t('jackpot')} level={2} color="green"/>
            <p className="p-text">
                {t('jackpot_text')}
            </p>
            <div className="w-full d-flex-col gap md:gap-20">
                <Fund
                    amount={25490.95}
                    targetAmount={36000}
                    increment={495}
                    speed={100}
                    step={12000}
                    color="red"
                    image="mecenat.webp"
                    link="https://mecenat-cardiaque.org"
                    pluralText="enfants sauvés"
                    singularText="enfant sauvé"
                    icon="favorite_border"
                    handleSetProgressIsComplete={handleSetProgressIsComplete}
                />
            </div>
            {showConfetti &&
                <ConfettiComponent
                    handleOffConfetti={handleOffConfetti}
                />
            }
            {progressIsComplete &&
                <ThankYou/>
            }
        </SpringLayoutTransitionDiv>
    )
}
