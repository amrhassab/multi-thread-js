import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Multi Threading using IFrames and Web Workers Case Study
        </p>
        <Link to="webworker">Web Worker Example</Link>
        <br />
        <Link to="iframe">IFrame Example</Link>
      </header>
    </div>
  );
}

export default App;
