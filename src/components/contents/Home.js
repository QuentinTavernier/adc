import {useTranslation} from "react-i18next";

import {Fund} from "../Fund";
import {Title} from "../Title";
import {ButtonComponent} from "../ButtonComponent";

export const Home = () => {
    const {t} = useTranslation();

    return (
        <div className="h-fit d-flex-col gap">
            <Title text={t('jackpot')} level={2} color="green"/>
            <p className="p-text">
                {t('jackpot_text')}
            </p>
            <div className="w-fit">
                <ButtonComponent
                    icon="volunteer_activism"
                    text={t('participate')}
                    onClick={() => window.open('https://www.helloasso.com/associations/auvergnats-du-coeur/formulaires/1')}
                />
            </div>
            <div className="w-full d-flex-col gap md:gap-20">
                <Fund
                    amount={25490.95}
                    targetAmount={36000}
                    increment={495}
                    speed={100}
                    step={12000}
                    color="red"
                    image="mecenat.webp"
                    link="https://mecenat-cardiaque.org"
                    pluralText="enfants sauvés"
                    singularText="enfant sauvé"
                    icon="favorite_border"
                />
            </div>
        </div>
    )
}
