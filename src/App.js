import {PhotoViewer} from './PhotoViewer/PhotoViewer';
import './App.css';
import React, { useState } from "react";  // import React (to provide access to JSX)

function App() {
  const [selectedImage, setSelectedImage] = useState("")
  return (
    <div>
      <h1 className="title">React Photo Viewer</h1>
      {/* <PhotoViewer /> */}
      <PhotoViewer setSelectedImage={url => setSelectedImage(url)} selectedImage={selectedImage}/>
    </div>
  );
}

export default App;
