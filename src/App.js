import {PhotoViewer} from './PhotoViewer/PhotoViewer';
import './App.css';

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/>
    </div>
  );
}

export default App;
