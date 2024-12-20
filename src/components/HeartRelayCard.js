import * as React from 'react';
import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";

import {IconComponent} from "./IconComponent";
import {Title} from "./Title";
import {ImagesGallery} from "./ImagesGallery";
import {StatItem} from "./StatItem";

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
                    <div className="flex gap-4 d-flex-col">
                        <Title
                            level={3}
                            text={"Édition " + year}
                        />
                        <div className="space-y-2">
                            <StatItem
                                icon="directions_run"
                                value={km}
                                label={t('participants')}
                            />
                            <StatItem
                                icon="volunteer_activism"
                                value={`${funds}€`}
                                label={t('collected')}
                            />
                            <StatItem
                                icon="diversity_3"
                                value={participants}
                                label={t('participants')}
                            />
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
    );
}

HeartRelayCard.propTypes = {
    heartRelay: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    onExpandClick: PropTypes.func.isRequired,
}

