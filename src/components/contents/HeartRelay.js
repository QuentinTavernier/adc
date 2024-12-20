import * as React from "react";
import {useState} from "react";

import {useTranslation} from "react-i18next";

import {HeartRelayCard} from "../HeartRelayCard";
import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";
import {Title} from "../Title";

import {heart_relays_content} from "../../constants/heart_relays_content";

export const HeartRelay = () => {
    const {t} = useTranslation();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <SpringLayoutTransitionDiv className="flex d-flex-col gap">
            <div>
                <Title text={t('heart_relay')} level={2} color="green"/>
                <p className="p-text mt-2">
                    {t('heart_relay_text')}
                </p>
            </div>
            <div className={`d-flex-col gap ${expandedIndex !== null ? '' : 'lg:d-flex-row'}`}>
                {heart_relays_content.map((heartRelay, index) => (
                    <HeartRelayCard
                        key={"HeartRelayCard" + index}
                        heartRelay={heartRelay}
                        expanded={expandedIndex === index}
                        onExpandClick={() => handleExpandClick(index)}
                    />
                ))}
            </div>
        </SpringLayoutTransitionDiv>
    );
};

