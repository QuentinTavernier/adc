import PropTypes from "prop-types";

export const Logo = (props) => {
    const {isHeader} = props

    const images = {
        header: require('../assets/images/header-logo.webp'),
        default: require('../assets/images/logo.webp'),
    };

    return (
        <img
            src={isHeader ? images.header : images.default}
            className={`relative w-auto ${isHeader ? "h-12" : "h-32"}`}
            alt="Logo"
        />
    )
}

Logo.propTypes = {
    isHeader: PropTypes.bool,
};
