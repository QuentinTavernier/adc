import PropTypes from "prop-types";

import {Button} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {IconComponent} from "./IconComponent";

export const ButtonComponent = (props) => {
    const {onClick, icon = "code", text, variant = "outlined", isLinkedInIcon, isGitHubIcon, animateIcon} = props;

    const buttonStyle = {
        '&.MuiButton-root': {
            fontFamily: "'Montserrat', sans-serif",
        },
        '&.MuiButton-contained': {
            backgroundColor: "var(--color-green)",
            border : "1px solid",
            color: "white",
            boxShadow: 'none',
        },
        '&.MuiButton-outlined': {
            borderColor: "var(--color-green)",
            color: "var(--color-green)",
        },
    }

    return (
        <Button variant={variant} sx={buttonStyle} onClick={onClick}>
            {isLinkedInIcon ? <LinkedInIcon/> : isGitHubIcon ? <GitHubIcon/> :
                <IconComponent
                    animate={animateIcon}
                    icon={icon}
                    color={variant === "outlined" ? "green" : "white"}
                    size="small"
                />
            }
            {text &&
                <div className="ml-2">
                    <p className={`p-text ml-2 ${variant === "outlined" ? "!text-green" : "text-white"}`}>
                        {text}
                    </p>
                </div>
            }
        </Button>
    );
};

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    isLinkedInIcon: PropTypes.bool,
    isGitHubIcon: PropTypes.bool,
    animateIcon: PropTypes.bool
}
