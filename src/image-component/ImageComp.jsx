import React from "react"

function ImageComp() {
    return (
        <picture className="business_img">
            <div className="overlay"></div>
            <img
                srcset="/images/image-header-mobile.jpg 400w, /images/image-header-desktop.jpg 401w"
                src="/images/image-header-desktop.jpg"
                alt="business-image"
            />
        </picture>
    )
}

export default ImageComp
