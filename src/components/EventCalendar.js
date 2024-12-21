import React from 'react';

import {useTranslation} from "react-i18next";

import {Title} from "./Title";
import {ButtonComponent} from "./ButtonComponent";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";

import {next_event_content} from "../constants/next_event_content";

export const EventCalendar = () => {
    const {t} = useTranslation();
    const {
        title,
        description,
        day,
        number,
        month,
        link
    } = next_event_content;

    return (
        <ScrollVisibilityDiv>
            <div className="card p-0 bg-opaqueGreen w-full md:w-2/3 lg:w-1/3 overflow-hidden">
                <div className="pt-4 px-4">
                    <Title text={t('next_event')} level={3} color="green"/>
                </div>
                <div className="w-full flex flex-col p-6 mt-4 bg-white rounded-b-xl">
                    <div className="w-full flex flex-row gap-6">
                        <div className="w-1/3 bg-opaqueGreen h-fit rounded-xl p-4 flex flex-col items-center justify-center">
                            <p className="p-text text-green font-medium">{day}</p>
                            <p className="p-text text-4xl md:text-6xl font-bold text-green">{number}</p>
                            <p className="p-text uppercase text-2xl md:text-4xl font-medium text-green">{month}</p>
                        </div>

                        <div className="border-l border-green"></div>

                        <div className="flex flex-col gap-4 flex-1">
                            <Title
                                text={title}
                                level={4}
                                color="green"
                            />
                            <p className="p-text">{description}</p>
                            {link && (
                                <div className="mt-2">
                                    <ButtonComponent
                                        animateIcon
                                        icon="how_to_reg"
                                        text={t('i_register')}
                                        onClick={() => window.open(link)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollVisibilityDiv>
    );
};
