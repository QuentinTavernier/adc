import * as React from "react";

import {useTranslation} from "react-i18next";

import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";
import {Title} from "../Title";

import {advent_calendar_content} from "../../constants/advent_calendar_content";
import {IconComponent} from "../IconComponent";
import {Sponsors} from "./Sponsors";


export const AdventCalendar = () => {
    const {t} = useTranslation();

    return (
        <SpringLayoutTransitionDiv className="flex d-flex-col gap">
            <div>
                <Title text={t('advent_calendar')} level={2} color="green"/>
                <p className="p-text my-2">
                    {t('advent_calendar_text')}
                </p>
                <div className="d-flex-row start-center my-4">
                    <IconComponent
                        icon="volunteer_activism"
                        color="green"
                        size="small"
                    />
                    <p className="p-text ml-2">
                        {advent_calendar_content.fund}€ {t('collected')}
                    </p>
                </div>
                <Sponsors sponsors={advent_calendar_content.sponsors}/>
            </div>
        </SpringLayoutTransitionDiv>
    );
};

