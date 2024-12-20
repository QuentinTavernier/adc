import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";

export const ImagesGallery = (props) => {
    const {images, isPreview} = props;

    const [isPortraitImages, setIsPortraitImages] = useState(false);

    useEffect(() => {
        if (images.length > 0) {
            const img = new Image();
            img.src = require(`../assets/images/${images[0]}.webp`);

            img.onload = () => {
                const imageDimensions = {width: img.width, height: img.height};
                setIsPortraitImages(imageDimensions.height > imageDimensions.width);
            };
        }
    }, [images]);

    const displayedImages = isPreview ? images.slice(0, 1) : images;

    return (
        <div className="w-full">
            <div className="relative">
                <div
                    className={`grid gap-4 ${isPortraitImages ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : isPreview ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                    {displayedImages.map((image, index) => (
                        <img
                            key={index}
                            src={require(`../assets/images/${image}.webp`)}
                            alt={`Image-min-${index + 1}`}
                            className="images"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ImagesGallery.propTypes = {
    images: PropTypes.array.isRequired,
    isPreview: PropTypes.bool,
};
