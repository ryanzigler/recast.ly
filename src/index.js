// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoList from './components/VideoList.js';
import exampleVideoData from './data/exampleVideoData.js';
var selected = exampleVideoData[0];

ReactDOM.render(<App videos={exampleVideoData}/>, document.getElementById('app'));


