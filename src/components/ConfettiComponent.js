import React from "react";
import PropTypes from "prop-types";

import Confetti from "react-confetti";

export const ConfettiComponent = (props) => {
    const {handleOffConfetti} = props

    const colors = ['#4CAF50', '#009688', '#e4051f']

    return (
        <div className="fixed top-0 left-0 z-[200]">
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
                recycle={false}
                gravity={0.05}
                wind={0.005}
                colors={colors}
                onConfettiComplete={() => handleOffConfetti()}
            />
        </div>
    )
}

ConfettiComponent.propTypes = {
    handleOffConfetti: PropTypes.func.isRequired,
}
