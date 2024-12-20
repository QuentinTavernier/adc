import {IconComponent} from "./IconComponent";
import PropTypes from "prop-types";

export const StatItem = (props) => {
    const {icon, value, label} = props

    return (
        <div className="flex items-center space-x-2">
            <IconComponent
                icon={icon}
                color="green"
                size="large"
            />
            <p className="text-green font-montserrat">
                <span className="font-bold text-xl">{value}</span> {label}
            </p>
        </div>
    )
}

StatItem.propTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
}
