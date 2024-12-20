import * as React from "react";

import {useTranslation} from "react-i18next";

import {ScrollVisibilityDiv} from "../animations/ScrollVisibilityDiv";
import {Title} from "../Title";
import {Sponsors} from "./Sponsors";

import {who_are_we_sponsors} from "../../constants/who_are_we_sponsors";


export const WhoAreWe = () => {
    const {t} = useTranslation();

    return (
        <div className="flex d-flex-col gap">
            <div>
                <Title text={t('who_are_we')} level={2} color="green"/>
            </div>
            <ScrollVisibilityDiv className="flex d-flex-col gap">
                <img
                    src={require('../../assets/images/who_are_we.webp')}
                    className="images"
                    alt="ADC"
                />
            </ScrollVisibilityDiv>
            <p className="p-text">
                {t('who_are_we_text')}
            </p>
            <Title text={t('sponsors')} level={2} color="green"/>
            <Sponsors sponsors={who_are_we_sponsors}/>
        </div>
    );
};

