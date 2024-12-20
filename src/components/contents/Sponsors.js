import React from 'react';
import PropTypes from "prop-types";

import {ScrollVisibilityDiv} from "../animations/ScrollVisibilityDiv";

export const Sponsors = (props) => {
    const {sponsors, isFooter} = props

    return (
        <ScrollVisibilityDiv>
        <div className="d-flex-row flex-wrap gap">
            {sponsors.map((sponsor, index) => (
                <button
                    key={index}
                    onClick={() => window.open(sponsor.link, '_blank')}
                    className="card w-fit"
                >
                    <img
                        src={require(`../../assets/images/${sponsor.image}.webp`)}
                        alt={sponsor.image}
                        className={`w-auto ${isFooter ? "h-8" : "h-16"}`}
                    />
                </button>
            ))}
        </div>
        </ScrollVisibilityDiv>
    );
};

Sponsors.propTypes = {
    sponsors: PropTypes.array.isRequired,
    isFooter: PropTypes.bool,
}
