import React, { useState } from "react";  // import React (to provide access to JSX)

export function PhotoViewer() {
    const urls = getImageUrls();
    const [selectedImage, setSelectedImage] = useState("")
    const images = urls.map((url, k) => <img key={k} className="thumbnail-image" src={url} onClick={() => setSelectedImage(url)} />);

    return (
        <div className="image-container">
            <div className="selected-image">
                {(!selectedImage) ? <p>no image selected</p>
                    : <img key="selectedImage" className="image" src={selectedImage} />
                }
                <h3>Select your photo</h3>
            </div>
            <div className="thumbnail-container">
                {images}
            </div>
        </div>
    );
}

function getImageUrls() {
    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];

    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    console.log(urls);
    return urls;
}

