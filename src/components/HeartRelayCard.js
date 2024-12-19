import * as React from 'react';
import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";

import {IconComponent} from "./IconComponent";
import {Title} from "./Title";
import {ImagesGallery} from "./ImagesGallery";

import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";


export const HeartRelayCard = (props) => {
    const {heartRelay, expanded, onExpandClick} = props
    const {year, km, funds, participants, images, description} = heartRelay

    const {t} = useTranslation();

    return (
        <ScrollVisibilityDiv className="w-full">
            <SpringLayoutTransitionDiv
                className="h-full"
            >
                <div className="card h-full justify-between">
                    <div className="flex gap-2 d-flex-col">
                            <Title
                                level={3}
                                text={"Edition " + year}
                                color="green"
                            />
                        <div className="d-flex-row start-center">
                            <IconComponent
                                icon="directions_run"
                                color="green"
                                size="small"
                            />
                            <p className="p-text ml-2">
                                {km} kms parcourus
                            </p>
                        </div>
                        <div className="d-flex-row start-center">
                            <IconComponent
                                icon="volunteer_activism"
                                color="green"
                                size="small"
                            />
                            <p className="p-text ml-2">
                                {funds}€ récoltés
                            </p>
                        </div>
                        <div className="d-flex-row start-center">
                            <IconComponent
                                icon="diversity_3"
                                color="green"
                                size="small"
                            />
                            <p className="p-text ml-2">
                                {participants} participants
                            </p>
                        </div>
                    </div>
                    {expanded &&
                        <>
                            <div className="py-6 w-full">
                                <p className="p-text mb-2">
                                    {description}
                                </p>
                            </div>
                            <div className="w-full">
                                <ImagesGallery
                                    images={images}
                                    isLandscapeImage
                                />
                            </div>
                        </>
                    }
                    <div
                        className={`d-flex-col md:d-flex-row w-full mt-8 md:mt-16 end-end`}
                    >
                        <button
                            onClick={onExpandClick}
                            className="d-flex-row gap-2 center-center"
                        >
                            <p className="p-text">
                                {expanded ? t('hide') : t('learn_more')}
                            </p>
                            <IconComponent
                                icon={expanded ? "expand_less" : "expand_more"}
                                color="blue"
                            />
                        </button>
                    </div>
                </div>
            </SpringLayoutTransitionDiv>
        </ScrollVisibilityDiv>
    )
        ;
}

HeartRelayCard.propTypes = {
    heartRelay: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    onExpandClick: PropTypes.func.isRequired,
}

