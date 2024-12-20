import React from 'react';
import {useTranslation} from "react-i18next";
import {Title} from "./Title";
import {ButtonComponent} from "./ButtonComponent";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";
import {next_event_content} from "../constants/next_event_content";

export const EventCalendar = () => {
    const {t} = useTranslation();

    return (
        <ScrollVisibilityDiv>
            <div className="card p-0 border-0 bg-green w-full lg:w-2/3 xl:w-1/2 2xl:w-1/3 overflow-hidden">
                <div className="pt-4 px-4">
                    <Title text={t('next_event')} level={3} color="white"/>
                </div>
                <div className="w-full flex flex-col p-6 mt-4 bg-white">
                    <div className="w-full flex flex-row gap-6">
                        <div className="w-1/3 bg-opaqueGreen h-fit rounded-xl p-4 flex flex-col items-center justify-center">
                            <p className="p-text text-green font-medium">
                                {next_event_content.day}
                            </p>
                            <p className="p-text text-4xl md:text-6xl font-bold text-green">
                                {next_event_content.number}
                            </p>
                            <p className="p-text uppercase text-2xl md:text-4xl font-medium text-green">
                                {next_event_content.month}
                            </p>
                        </div>

                        <div className="border-l border-green"></div>

                        <div className="flex flex-col gap-4 flex-1">
                            <Title
                                text={next_event_content.title}
                                level={4}
                                color="green"
                            />
                            <p className="p-text">
                                {next_event_content.description}
                            </p>
                            {next_event_content.link && (
                                <div className="mt-2">
                                    <ButtonComponent
                                        icon="how_to_reg"
                                        text={t('i_register')}
                                        onClick={() => window.open(next_event_content.link)}
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
