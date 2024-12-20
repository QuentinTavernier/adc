import React from 'react';
import PropTypes from "prop-types";

export const Sponsors = (props) => {
    const {sponsors, isFooter} = props

    return (
        <div className="d-flex-row gap">
            {sponsors.map((sponsor, index) => (
                <button
                    key={index}
                    onClick={() => window.open(sponsor.link, '_blank')}
                    className="sponsor-button"
                >
                    <img
                        src={require(`../../assets/images/${sponsor.image}.webp`)}
                        alt={sponsor.image}
                        className={`w-auto ${isFooter ? "h-8" : "h-16"}`}
                    />
                </button>
            ))}
        </div>
    );
};

Sponsors.propTypes = {
    sponsors: PropTypes.array.isRequired,
    isFooter: PropTypes.bool,
}
