import React from 'react';

import {useTranslation} from "react-i18next";

import {Title} from "./Title";
import {ButtonComponent} from "./ButtonComponent";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";

import {nextEvent} from "../constants/next_event";

export const EventCalendar = () => {
    const {t} = useTranslation();

    return (
        <ScrollVisibilityDiv>
            <div className="card">
                <Title text={t('next_event')} level={3} color="green"/>
                <div className="w-full flex d-flex-col rounded-xl border shadow-sm gap-4 p-4 mt-4 bg-opaqueGreen">
                    <div className="w-full flex d-flex-row">
                        <div className="w-1/3 d-flex-col">
                            <p className="p-text mb-1 text-green">
                                {nextEvent.day}
                            </p>
                            <p className="p-text text-3xl md:text-5xl text-green">
                                {nextEvent.number}
                            </p>
                            <p className="p-text uppercase text-3xl md:text-5xl text-green">
                                {nextEvent.month}
                            </p>
                        </div>
                        <div className="border-l border-green mx-4"></div>
                        <div className="d-flex-col start-start gap-4">
                            <Title
                                text={nextEvent.title}
                                level={4}
                                color="green"
                            />
                            <p className="p-text">
                                {nextEvent.description}
                            </p>
                        </div>
                    </div>
                    {nextEvent.link &&
                            <ButtonComponent
                                icon="how_to_reg"
                                variant="contained"
                                text={t('i_register')}
                                onClick={() => window.open(nextEvent.link)}
                            />
                    }
                </div>
            </div>
        </ScrollVisibilityDiv>
    );
};
