import * as React from "react";

import {useTranslation} from "react-i18next";

import {SpringLayoutTransitionDiv} from "../animations/SpringLayoutTransitionDiv";
import {Title} from "../Title";
import {Sponsors} from "./Sponsors";
import {StatItem} from "../StatItem";

import {advent_calendar_content} from "../../constants/advent_calendar_content";

export const AdventCalendar = () => {
    const {t} = useTranslation();
    const {fund, participants, sponsors} = advent_calendar_content

    return (
        <SpringLayoutTransitionDiv className="flex d-flex-col gap">
            <div>
                <Title text={t('advent_calendar')} level={2} color="green"/>
                <p className="p-text my-2">
                    {t('advent_calendar_text')}
                </p>
                <div className="d-flex-col gap-2 my-4">
                    <StatItem icon="volunteer_activism" value={fund} label={`€ ${t('collected')}`}/>
                    <StatItem icon="group" value={participants} label={t('participants')}/>
                </div>
                <Sponsors sponsors={sponsors}/>
            </div>
        </SpringLayoutTransitionDiv>
    );
};

