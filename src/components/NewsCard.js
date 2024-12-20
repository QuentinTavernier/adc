import * as React from 'react';
import PropTypes from "prop-types";

import {useTranslation} from "react-i18next";

import {IconComponent} from "./IconComponent";
import {Title} from "./Title";
import {SpringLayoutTransitionDiv} from "./animations/SpringLayoutTransitionDiv";
import {ScrollVisibilityDiv} from "./animations/ScrollVisibilityDiv";
import {ImagesGallery} from "./ImagesGallery";

export const NewsCard = (props) => {
    const {news, expanded, onExpandClick} = props
    const {title, short_description, description, images} = news

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
                            text={title}
                            color="green"
                        />
                        {!expanded &&
                        <ImagesGallery
                            isPreview
                            images={images}
                            isLandscapeImage
                        />
                        }
                        <p className="p-text">
                            {short_description}
                        </p>
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

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    onExpandClick: PropTypes.func.isRequired,
}

