import * as React from "react";
import {useState} from "react";

import {useTranslation} from "react-i18next";

import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";
import {Title} from "../Title";
import {NewsCard} from "../NewsCard";

import {news_content} from "../../constants/news_content";

export const News = () => {
    const {t} = useTranslation();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <SpringLayoutTransitionDiv className="flex d-flex-col gap">
                <Title text={t('news')} level={2} color="white"/>
            <div className={`d-flex-col gap ${expandedIndex !== null ? '' : 'lg:d-flex-row'}`}>
                {news_content.map((news, index) => (
                    <NewsCard
                        key={"News" + index}
                        news={news}
                        expanded={expandedIndex === index}
                        onExpandClick={() => handleExpandClick(index)}
                    />
                ))}
            </div>
        </SpringLayoutTransitionDiv>
    );
};

