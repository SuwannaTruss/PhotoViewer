import React from "react";  // import React (to provide access to JSX)

export function PhotoViewer() {    // declare a new function called 'PhotoViewer'
    return (                
        <div className="image-container">               
            <img className = "image" src="https://picsum.photos/300/200"/>
        </div>
    );
}
