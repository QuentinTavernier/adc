import React from "react";

import {useTranslation} from "react-i18next";

import {EnteringDiv} from "./animations/EnteringDiv";
import {IconComponent} from "./IconComponent";
import {ButtonComponent} from "./ButtonComponent";
import {EventCalendar} from "./EventCalendar";

export const ThankYou = () => {
    const {t} = useTranslation();

    return (
        <EnteringDiv>
            <div className="w-fit md:mt-20 flex d-flex-col gap">
                <p className="flex flex-col start-start gap-1">
                            <span className="p-text text-4xl text-green font-bold d-flex-row gap-2">
                                {t('thank_you')}
                                <IconComponent
                                    icon="favorite"
                                    color="green"
                                    size="large"
                                    animate
                                />
                            </span>
                    <p className="p-text">
                        {t('thank_you_text')}
                    </p>
                </p>
                <div className="d-flex-col start-start gap">
                    <ButtonComponent
                        animateIcon
                        icon="volunteer_activism"
                        text={t('participate')}
                        onClick={() => window.open('https://www.helloasso.com/associations/auvergnats-du-coeur/formulaires/1')}
                    />
                    <EventCalendar/>
                </div>
            </div>
        </EnteringDiv>
    )
}
