import React from "react";  // import React (to provide access to JSX)

export function PhotoViewer({src}) {    // declare a new function called 'PhotoViewer'
    return (                
        <div className="image-container">               
            <img className = "image" src={src}/>
        </div>
    );
}
