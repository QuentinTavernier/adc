import React from "react";

export const Banner = () => {
    return (
        <div className="relative">
            <img
                src={require('./../assets/images/banner.webp')}
                className="w-full h-auto mt-20"
                alt="banner"
            />
        </div>
    )
}
