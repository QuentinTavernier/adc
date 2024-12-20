import PropTypes from "prop-types";

import {motion} from "framer-motion";
import Icon from "@mui/material/Icon";

export const IconComponent = (props) => {
    const {icon, size = "medium", color = "white", animate} = props

    const iconVariants = {
        animate: {scale: [1, 1.2, 1], transition: {duration: 1, repeat: Infinity}}
    };

    return (
        <motion.div
            variants={iconVariants}
            animate={animate ? "animate" : ""}
            className="flex center-center"
        >
            <Icon
                fontSize={size}
                className={`text-${color}`}
            >
                {icon}
            </Icon>
        </motion.div>
    )
}

IconComponent.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    animate : PropTypes.bool
}
