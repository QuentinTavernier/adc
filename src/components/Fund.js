import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import {EnteringDiv} from "./animations/EnteringDiv";
import {IconComponent} from "./IconComponent";
import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";

export const Fund = (props) => {
    const {
        amount,
        targetAmount,
        increment,
        speed,
        step,
        color,
        image,
        link,
        singularText,
        pluralText,
        icon,
    }
        = props

    const [progressAmount, setProgressAmount] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [numberOfLevelReached, setNumberOfLevelReached] = useState(0);

    const steps = [];
    for (let i = step; i < targetAmount; i += step) {
        steps.push(i);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressAmount((prevAmount) => {
                if (prevAmount + increment >= amount) {
                    clearInterval(interval);
                    return amount;
                }
                return prevAmount + increment;
            });
        }, speed);

        setNumberOfLevelReached(Math.floor(progressAmount / step));

        return () => clearInterval(interval);
    }, [increment, amount, speed, progressAmount, step]);

    const renderImage = () => {
        const imgElement = (
            <img
                src={require(`../assets/images/${image}`)}
                className="w-auto h-16 object-cover mb-4"
                alt={`Fund for ${image}`}
            />
        );

        return link ? (
            <a href={link} className="inline-block mb-4">
                {imgElement}
            </a>
        ) : imgElement;
    };

    const renderLevelMarkers = () => {
        return steps.map((stepValue, index) => {
            const position = (stepValue / targetAmount) * 100;
            const number = index + 1;
            const levelReached = progressAmount > stepValue

            return (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        left: `${position}%`,
                        borderLeft: `3px dotted var(--color-${levelReached ? "beige" : color})`,
                        height: '90%',
                    }}
                >
                    {progressAmount >= stepValue && !isMobile && (
                        <div className="relative flex justify-center top-[150%] -translate-x-[50%]">
                            <EnteringDiv>
                                <div className="relative flex justify-center">
                                    <div
                                        className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent`}
                                        style={{borderBottomColor: `var(--color-${color})`}}
                                    />
                                    <div
                                        className={`marker border-${color} w-full`}>
                                        <div className="flex flex-row gap-1">
                                            {Array.from({length: number}).map((_, iconIndex) => (
                                                <IconComponent
                                                    key={iconIndex}
                                                    icon={icon}
                                                    color={color}
                                                    size="small"
                                                />
                                            ))}
                                        </div>
                                        <p className={`p-text font-montserrat text-${color}`}>
                                            {number} {number === 1 ? singularText : pluralText}
                                        </p>
                                    </div>
                                </div>
                            </EnteringDiv>
                        </div>
                    )}
                </div>
            );
        });
    };

    const renderMobileLevelMarker = () => {
        return isMobile && numberOfLevelReached > 0 && (
            <EnteringDiv>
                <SpringLayoutTransitionDiv
                    className={`marker border-${color} mt-4 w-fit`}>
                    <div className="flex flex-row gap-1">
                        {Array.from({length: numberOfLevelReached}).map((_, index) => (
                            <IconComponent
                                key={index}
                                icon={icon}
                                color={color}
                                size="small"
                            />
                        ))}
                    </div>
                    <p className={`p-text font-montserrat text-${color}`}>
                        {numberOfLevelReached} {numberOfLevelReached === 1 ? singularText : pluralText}
                    </p>
                </SpringLayoutTransitionDiv>
            </EnteringDiv>
        );
    };

    return (
        <div className="w-full">
            {renderImage()}
            <div className="relative w-full bg-opaqueWhite between-center rounded-full flex items-center h-12 p-4">
                <div
                    className={`absolute left-0 h-12 rounded-full z-0 bg-${color}`}
                    style={{
                        width: `${(progressAmount / targetAmount) * 100}%`,
                        transition: 'width 1s ease-out',
                    }}
                />
                {renderLevelMarkers()}
                <p className="p-text text-white font-montserrat z-10">{progressAmount} €</p>
                <p className={`right-0 top-1/2 p-text text-${color} font-montserrat z-10`}>{targetAmount} €</p>
            </div>
            {renderMobileLevelMarker()}
        </div>
    );
};

Fund.propTypes = {
    amount: PropTypes.number.isRequired,
    targetAmount: PropTypes.number.isRequired,
    increment: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    singularText: PropTypes.string.isRequired,
    pluralText: PropTypes.string.isRequired,
    link: PropTypes.string
};
